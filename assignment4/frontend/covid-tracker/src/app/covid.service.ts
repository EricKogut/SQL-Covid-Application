import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const baseUrl = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) {}
  test(){
    //Getting all available course codes
    return this.http.get<any[]>(baseUrl+"/")
  }
}
