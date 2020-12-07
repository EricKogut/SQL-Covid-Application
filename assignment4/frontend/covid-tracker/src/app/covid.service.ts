import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { pipe } from 'rxjs/index';

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
    return this.http.post<string>(baseUrl + "/api/case/" + email, null).pipe(
      catchError(this.handleError('POST Case', ""))
    )
  }

  getCoincidence(email: string, compareTo: string) {
    return this.http.get<any[]>(baseUrl + "/api/coincidence/" + email + "/" + compareTo);
  }

  handleError<T>(operation = "operation", result?: T) {
    return (err: any): Observable<T> => {
      console.warn(err);

      return of(result as T);
    }
  }

}
