import { Component, OnInit } from '@angular/core';
import {CovidService} from "../covid.service";
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email;
  password;
  constructor(private covidService: CovidService,
    private router: Router) { }

  handleEmail(term: string): void {this.email = term.replace(/[<={}()>/\\]/gi, "")}
  handlePassword(term: string): void {this.password = term.replace(/[<={}()>/\\]/gi, "")}
  ngOnInit(): void {
  }

  handleSignIn(){
    console.log("Signing in")
    this.covidService.signIn({email: this.email, password: this.password}).subscribe(result=>
      {
        console.log("the result of the sign in is", result)
        if(result.length==0){
          window.alert("Wrong username password combo")
        }
        else{
          console.log("SETTING THE LOGGED IN TO TRUE")
          localStorage.setItem("isLoggedIn", "true")
          localStorage.setItem("email", this.email)

          window.location.reload(false)

        }


      })
  }

}
