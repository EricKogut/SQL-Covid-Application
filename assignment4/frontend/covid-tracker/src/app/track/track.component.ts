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
    this.covidService.getCoincidence('PetitY899@uwo.ca', this.name.value).subscribe((x) => { this.common = x })
  }

  report(): void {
    this.covidService.reportCase('Abbott@uwo.ca').subscribe((x) => { this.response = x }, null, () => { console.log(this.response) });
  }

  getNotifications(): void {
    this.covidService.getNotifications('Abbott@uwo.ca').subscribe((x) => { this.notifications = x}, null, () => {console.log(this.notifications)});
  }




}
