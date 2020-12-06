import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';

@Component({
  selector: 'app-schedule-lectures',
  templateUrl: './schedule-lectures.component.html',
  styleUrls: ['./schedule-lectures.component.css']
})
export class ScheduleLecturesComponent implements OnInit {
 seats = '';
 result: any;
  
 
 constructor(private covidservice:CovidService ) { }

  ngOnInit(): void {
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
