import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utdf',
  templateUrl: './utdf.component.html',
  styleUrls: ['./utdf.component.css']
})
export class UtdfComponent implements OnInit {

  myCourses: string[] = ["Angular", "FullStack", "Python", "MEANStack", "MERNStack", "Other"];

  constructor() { }

  ngOnInit(): void {
  }
  getStudentData(val: any) {
    console.log(val);
  }
}
