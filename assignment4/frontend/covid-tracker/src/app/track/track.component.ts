import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  user: string

  constructor() { }

  ngOnInit(): void {
    this.user = localStorage.getItem('user')
  }

}
