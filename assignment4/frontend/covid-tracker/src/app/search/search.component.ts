import { Component, OnInit } from '@angular/core';
import {CovidService } from '../covid.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  courseName= '';
  courseID = '';
  result: any;
  resultEnroll:any;

  courseIDs: any;


  constructor(private covidService: CovidService) { }

  ngOnInit(): void {
    this.loadIDs();
  }


  getSearchResults(){
    var numbers = /^[0-9]+$/;

    if(this.courseID.match(numbers)){}
    else{
      alert("Error! only numbers allowed!");
      return;
    }

    if(this.courseName == ''){
      //get search results by courseID
      this.covidService.getSearchResultsCourseID(this.courseID).subscribe(response=>{
        this.result =response;
        console.log(response);
    
      }, error=>{
        alert(error.error);
    
      });

    }else{
      //get search results by course name
      // only alphabets
      var letters = /^[A-Za-z]+$/;
      if(this.courseName.match(letters)){
        this.covidService.getSearchResultsCourseName(this.courseName).subscribe(response=>{
          this.result =response;
          console.log(response);
      
        }, error=>{
          alert(error.error);
      
        });
      }else{
        alert("Only alphabets allowed! Pleas double check your inputs");
      }

     

    }

  };

    enroll(input){

    this.courseID = input;

    // check if already enrolled 
    this.covidService.checkIfAlreadyEnrolled(this.courseID,localStorage.getItem('email')).subscribe(response=>{
      console.log(response);
      this.resultEnroll = response;
     if(this.resultEnroll.length == 0){
      this.covidService.enrollForThisCourse(this.courseID,localStorage.getItem('email')).subscribe(response =>{
        console.log(response);
      this.updateCourseRelation(this.courseID);
      })
     }
     else{
       alert("Error!You have already enrolled for this course!");
     }
  
    }, error=>{
      alert(error.error);
  
    });


  };

  updateCourseRelation(input){
    this.covidService.updateCourseRelation(input).subscribe(response=>{
      console.log(response);
      alert("You have been Successfully enrolled for this course!");
  
    }, error=>{
      alert(error.error);
  
    });

  };



  //courseIDS
  loadIDs(){
    this.covidService
      .getCourseIDs()
      .subscribe(
        (response) => {
         // console.log(response);
          this.courseIDs = response;
   
          if (this.courseIDs.sqlMessage) {
            alert(this.courseIDs.sqlMessage);
          } else {
           
          }
        },
        (error) => {
          alert(error.error);
        }
      );
  }
     



}
