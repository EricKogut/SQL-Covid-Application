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
 startTime = '';
 endTime = '';
 courseID = '';
 lectureID = '';
 classroomNumber:any;

 resultLec: any;
  
 
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

  insertLecture(classNo){

    this.classroomNumber = classNo;
    console.log(this.classroomNumber);
    this.covidservice.insertLecture(this.lectureID, this.startTime, this.endTime, this.courseID,this.classroomNumber ).subscribe(response=>{
      console.log(response);
      this.resultLec =response;
      if(this.resultLec.sqlMessage){
        alert(this.resultLec.sqlMessage);

      }else{
        alert("Lecture Successfully added!");
      }
      
  
    }, error=>{
      alert(error.error);
  
    });
   
  
  };

  
}
