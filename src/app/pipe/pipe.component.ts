import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  msg: string = "How are you all my dear friends.";
  employee = {
    id: 101,
    name: "Shubham",
    post: "Fullstack Developer",
    salary: 80000
  }

  d = new Date();

  students = [
    { id: 201, name: "Raju", address: "Pune", gender: "Male" },
    { id: 202, name: "Varun", address: "Mumbai", gender: "Male" },
    { id: 203, name: "Kajal", address: "Nashik", gender: "Female" },
    { id: 204, name: "Shubham", address: "Pune", gender: "Male" },
    { id: 205, name: "Rani", address: "Thane", gender: "Female" },
  ]
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  setParameter(para: any) {
    this._router.navigate(['/pipe', para]);
  }
}
