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

  constructor(private covidService: CovidService) { }

  ngOnInit(): void {
    this.covidService.reportCase('Abbott@uwo.ca').subscribe((x) => { this.response = x });
  }

}
