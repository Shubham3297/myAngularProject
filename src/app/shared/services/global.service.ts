import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DBURL } from 'src/app/shared/constant/constantData';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  option = { Headers: new HttpHeaders().set("Content-type", "application/json") };

  constructor(private _http: HttpClient) { }

  // To handle server side error
  formate(error: any) {
    return throwError(error.error);
  }

  // get data
  getRecord(path: string): Observable<any> {
    return this._http.get(DBURL + path).pipe(catchError(this.formate));
  }

  // getsingleRecord
  getsingleRecord(path: string, id: number): Observable<any> {
    const url = `${DBURL}/${path}/${id}`;       //http://localhost:3000/employees/id
    return this._http.get(url).pipe(catchError(this.formate));
  }

  //Note : putRecord,addRecord, deleteRecord, login code here but related code of this code do not write in related component ts files
  //this above mention methode works with the help of myservice file , other methode works with global service.

  // putRecord
  putRecord(path: string, id: number, empObj = {}) {
    const url = `${DBURL}/${path}/${id}`;       //http://localhost:3000/employees/id
    return this._http.put(url, empObj).pipe(catchError(this.formate));
  }

  //addRecord     
  addRecord(path: string, empObj = {}) {
    const url = `${DBURL}/${path}`;
    return this._http.post(url, empObj).pipe(catchError(this.formate));
  }

  //deleteRecord (Note :- path is parameter, you give any name for parameter)
  deleteRecord(path: string, id: number) {
    const url = `${DBURL}/${path}/${id}`;       //http://localhost:3000/employees/id
    return this._http.delete(url).pipe(catchError(this.formate));
  }

  //login user
  login(user: any) {
    sessionStorage.setItem("user", user);
  }

  //logout user
  logout() {
    sessionStorage.removeItem("user");
  }
}
