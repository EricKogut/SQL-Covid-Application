import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { CovidService } from '../covid.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  name = new FormControl('PetitY899@uwo.ca', [
    Validators.required,
    Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
  ]); // For demonstration
  response: string;
  common: any[];
  user: string

  notifications: any[];

  constructor(private covidService: CovidService) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('user')
  }


  getCoincidence(): void {
    this.common = [];
    this.covidService.getCoincidence(localStorage.getItem('email'), this.name.value).subscribe((x) => { this.common = x })
  }

  report(): void {
    this.covidService.reportCase(localStorage.getItem('email')).subscribe((x) => { this.response = x }, null, () => { console.log(this.response) });
  }

  getNotifications(): void {
    this.covidService.getNotifications(localStorage.getItem('email')).subscribe((x) => { this.notifications = x}, null, () => {console.log(this.notifications)});
  }
}
