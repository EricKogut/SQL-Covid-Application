import { Component, OnInit } from '@angular/core';
import {CovidService } from '../covid.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  progressValue = 0;
  courseName= '';
  courseID = '';
  result: any;


  constructor(private covidService: CovidService) { }

  ngOnInit(): void {
  }


  getSearchResults(){
    console.log("Getting he search results")
    for(var i =0; i<100; i++){
      this.progressValue = i
      console.log(this.progressValue)
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

      this.covidService.getSearchResultsCourseName(this.courseName).subscribe(response=>{
        this.result =response;
        console.log(response);

      }, error=>{
        alert(error.error);

      });

    }

  };

}
