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

  getCourseIDs(){
    return this.http.get<any[]>(baseUrl+"/api/courseID")
  }

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
      catchError(this.handleError('POST Case', "Could not post case, your case is already in the database"))
    )
  }

  getCoincidence(email: string, compareTo: string) {
    return this.http.get<any[]>(baseUrl + "/api/coincidence/" + email + "/" + compareTo).pipe(
      catchError(this.handleError('GET Coincidence', []))
    );
  }

  getNotifications(email: string) {
    return this.http.get<any[]>(baseUrl + '/api/notifications/' + email).pipe(
      catchError(this.handleError('GET Notifs', []))
    )
  }

  handleError<T>(operation = "operation", result?: T) {
    return (err: any): Observable<T> => {
      console.warn(err);

      return of(result as T);
    }
  }

  //inserting a new lecture 
  insertLecture(lectureID:string, startTime: string, endTime: string, courseID: string, classroomNumber: string){
  return this.http.post(baseUrl+'/api/lecture/add', {
    "lectureID": lectureID,
    "startTime": startTime,
     "endTime": endTime,
    "courseID": courseID,
     "classroomNumber": classroomNumber
  })
  };
  signIn(input){
    return this.http.put<any[]>(baseUrl+"/api/signin/",input);

  }

  //get course for enrollment 
  getCoursesForEnroll(){
    return this.http.get<any[]>(baseUrl+"/api/available");

  };

  enrollForThisCourse(courseID: string, studentEmail: string){
    return this.http.post(baseUrl+'/api/course/add',{
      "courseID": courseID,
      "studentEmail": studentEmail

    });
  };

  checkIfAlreadyEnrolled(courseID: string, studentEmail: string){
    return this.http.post(baseUrl+'/api/enrollment/check',{
      "courseID": courseID,
      "studentEmail": studentEmail

    });
  };

  updateCourseRelation(courseID: string){
   
    return this.http.put(baseUrl+'/api/course/increment/'+ courseID,{});

  };

}
