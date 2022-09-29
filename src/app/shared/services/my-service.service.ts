import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { students } from 'src/app/shared/constant/constantData';
import { Employee } from 'src/app/shared/classess/Employee';

@Injectable({
  providedIn: 'root'
})

export class MyServiceService {

  stdArray = students;
  dburl: string = "http://localhost:3000/employees";

  constructor(private _http: HttpClient) { }


  // to fetch data from server
  getRecord(): Observable<Employee[]> {
    return this._http.get<Employee[]>(this.dburl);
  }

  // add record in database
  addRecord(emp: any) {
    return this._http.post(this.dburl, emp);
  }

  //delete record
  deleteRecord(id: number) {
    const baseUrl = `${this.dburl}/${id}`;  //http://localhost:3000/employees/id
    return this._http.delete(baseUrl);
  }

  // get single record
  getSingleRecord(id: number) {
    const baseUrl = `${this.dburl}/${id}`;   //http://localhost:3000/employees/id
    return this._http.get(baseUrl);
  }

  // Update Record
  updateRecord(emp: any) {
    const baseUrl = `${this.dburl}/${emp.id}`;   //http://localhost:3000/employees/id
    return this._http.put(baseUrl, emp);
  }

  // get login user credential 
  getUser() {
    return this._http.get("http://localhost:3000/login");
  }

  login(user: any) {
    sessionStorage.setItem("user", user);
  }

  logout() {
    sessionStorage.removeItem("user");
  }
}
