import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isLoggedIn = false;

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem("isLoggedIn")){
      this.isLoggedIn = true;

    }
  }
  handleLogout(){
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("email");
    this.isLoggedIn = false;
  }

}
