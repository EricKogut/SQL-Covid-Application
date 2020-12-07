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


  constructor(private covidService: CovidService) { }

  ngOnInit(): void {
  }


  getSearchResults(){
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
