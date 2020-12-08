import { Component, OnInit } from '@angular/core';
import {CovidService } from '../covid.service';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {

  result:any;

  constructor(private covidService: CovidService) { }

  ngOnInit(): void {
    this.covidService.getCoursesForEnroll().subscribe(response=>{
      console.log(response);
      this.result =response;
      if(this.result.sqlMessage){
        alert(this.result.sqlMessage);

      }
  
    }, error=>{
      alert(error.error);
  
    });
  }



}
