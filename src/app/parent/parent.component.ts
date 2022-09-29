import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  msg: string = "";
  childData: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  sendData(val: any) {
    this.msg = val;
  }
}
