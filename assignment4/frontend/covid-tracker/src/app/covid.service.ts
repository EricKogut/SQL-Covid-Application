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
    return this.http.get<any[]>(baseUrl+"/api/");
  };

  // Get available classroom list to show to the professor
  getClassroom(capacity: string){
    return this.http.get<any[]>(baseUrl+"/api/classrooms/"+ capacity);
  };

  //get search results by courseID
  getSearchResultsCourseID(courseID: string){
    return this.http.get<any[]>(baseUrl+"/api/search/courseID/"+ courseID);
  };

  //get search results by courseID
  getSearchResultsCourseName(courseName: string){
    return this.http.get<any[]>(baseUrl+"/api/search/courseName/"+ courseName);
  };

  reportCase(email: string) {
    return this.http.post<any[]>(baseUrl + "/api/case/" + email, null);
  }

  getCoincidence(email: string, compareTo: string) {
    return this.http.get<any[]>(baseUrl + "/api/coincidence/" + email + "/" + compareTo);
  }

}
