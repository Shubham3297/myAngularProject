import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {


  isCon: boolean = true;
  cars: string[] = ["TATA", "BMW", "NANO", "MARUTI", "TOYOTA"];
  myCar: string = "MARUTI";

  isVal: boolean = true;
  myStyle = {
    color: "blue",
    fontSize: "20px",
    backgroundColor: "cyan"
  }

  myClass = {
    "textDanger": this.isVal,
    "textSuccess": !this.isVal,
    "special": this.isVal
  }
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  myProducts(val: any) {
    alert("Your Product Is " + val);
  }

  setParameter(para: any) {
    this._router.navigate(['/directive', para]);
  }

}
