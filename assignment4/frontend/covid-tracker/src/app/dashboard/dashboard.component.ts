
import { Component, OnInit, ɵConsole } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CovidService  } from '../covid.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private covidService: CovidService) { }
  baseURL = 'http://localhost:5000'

  message: String



  ngOnInit() {
    console.log("initializing")
    this.covidService.test()
    .subscribe(data => {
       console.log(data, "is the data")
    },
    (e) => console.log(e) );



};

}






