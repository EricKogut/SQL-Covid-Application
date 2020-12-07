import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CovidService } from '../covid.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  name = new FormControl('PetitY899@uwo.ca'); // For demonstration
  response: string;
  common: any[];

  notifications: any[];

  constructor(private covidService: CovidService) { }

  ngOnInit(): void {
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
