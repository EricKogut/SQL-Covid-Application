import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';


@Component({
  selector: 'app-schedule-lectures',
  templateUrl: './schedule-lectures.component.html',
  styleUrls: ['./schedule-lectures.component.css'],
})
export class ScheduleLecturesComponent implements OnInit {

  seats = '';
  result: any;
  startTimeH = '00'
  startTimeM = '00'
  startTimeS = '00'

  endTimeH = '00'
  endTimeM = '00'
  endTimeS = '00'

  startTime = `${this.startTimeH}:${this.startTimeM}:${this.startTimeS}`;
  endTime = `${this.endTimeH}:${this.endTimeM}:${this.endTimeS}`;

  courseID = '';
  courseIDs: any;

  lectureID = '';
  classroomNumber: any;

  resultLec: any;

  constructor(private covidservice: CovidService) {}

  ngOnInit(): void {
    this.loadTime()
    this.loadIDs()


    
  }


  loadTime(){
  
    this.startTime = `${this.startTimeH}:${this.startTimeM}:${this.startTimeS}`;
    this.endTime = `${this.endTimeH}:${this.endTimeM}:${this.endTimeS}`;
    
  }

  // log(){
  //   this.loadIDs()
  // }

  //courseIDS
  loadIDs(){
    this.covidservice
      .getCourseIDs()
      .subscribe(
        (response) => {
          console.log(response);
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

  look() {
    // only numbers 
    if(!this.seats){
      alert("The value for number of seats can not be empty!");
      return;
    }
    this.covidservice.getClassroom(this.seats).subscribe(
      (response) => {
        this.result = response;
        console.log(response);
      },
      (error) => {
        alert(error.error);
      }
    );
  }

  insertLecture(classNo) {
    this.classroomNumber = classNo;
    var numbers = /^[0-9]+$/;

    if(!this.classroomNumber || !this.courseID){
      alert("Please fill in all the inputs before searching");
      return;
    }
    if(this.startTimeH.match(numbers) && this.startTimeM.match(numbers) && this.startTimeS.match(numbers) && this.endTimeH.match(numbers) && this.endTimeM.match(numbers) && this.endTimeS.match(numbers)){
       this.loadTime()
      this.covidservice
      .insertLecture(
        this.lectureID,
        this.startTime,
        this.endTime,
        this.courseID,
        this.classroomNumber
      )
      .subscribe(
        (response) => {
          console.log(response);
          this.resultLec = response;
          if (this.resultLec.sqlMessage) {
            alert(this.resultLec.sqlMessage);
          } else {
            alert('Lecture Successfully added!');
          }
        },
        (error) => {
          alert(error.error);
        }


      );
  }else{
    alert("Only numbers allowed for start and end time!");
  }
  }
}
