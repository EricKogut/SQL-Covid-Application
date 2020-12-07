import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-schedule-lectures',
  templateUrl: './schedule-lectures.component.html',
  styleUrls: ['./schedule-lectures.component.css']
})
export class ScheduleLecturesComponent implements OnInit {
 seats = '';
 result: any;
 startTime: NgbTimeStruct = {hour: 13, minute: 30, second: 30};
 seconds = true;
 endTime = {hour: 13, minute: 30, second: 30};

 courseID = '';
 lectureID = '';
  
 
 constructor(private covidservice:CovidService ) { }

  ngOnInit(): void {

    this.startTime = {hour: 13, minute: 30, second: 30};

  }
 
  look(){
  this.covidservice.getClassroom(this.seats).subscribe(response=>{
    this.result =response;
    console.log(response);

  }, error=>{
    alert(error.error);

  });
  };
}
