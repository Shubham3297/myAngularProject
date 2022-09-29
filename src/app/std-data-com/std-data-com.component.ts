import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../shared/services/my-service.service';

@Component({
  selector: 'app-std-data-com',
  templateUrl: './std-data-com.component.html',
  styleUrls: ['./std-data-com.component.css']
})
export class StdDataComComponent implements OnInit {

  studentsArray: any;
  constructor(private _mySer: MyServiceService) { }    // dependancy injection

  ngOnInit(): void {
    this.studentsArray = this._mySer.stdArray;

  }

}
