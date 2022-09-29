import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  myName: string = "Firstbit Solution";
  imgPath: string = "../../assets/body.jpg";
  imgName: string = "Body";
  product: any;

  imgPath1: string = "../../assets/body.jpg";
  imgName1: string = "Body";
  cond: boolean = true;


  cars: string[] = ["TOYOTA", "BMW", "MARUTI", "TATA"];
  bikes: string[] = ["HONDA", "BAJAJ", "HERO", "SUZUKI"];

  cond1: boolean = true;
  cond2: boolean = false;

  myItem: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  greeting() {
    alert("Hi, You called event binding");
  }

  change() {
    this.cond = !this.cond;
    if (this.cond) {
      this.imgPath1 = "../../assets/body.jpg";
      this.imgName1 = "Body";
    }
    else {
      this.imgPath1 = "../../assets/01.jpg";
      this.imgName1 = "01";
    }
  }

  type() {
    this.cond1 = true;
    if (this.cond1) {
      this.cars = ["TOYOTA", "BMW", "MARUTI", "TATA"];
      this.cond2 = false;
    }
  }

  type1() {
    this.cond2 = true;
    if (this.cond2) {
      this.bikes = ["HONDA", "BAJAJ", "HERO", "SUZUKI"];
      this.cond1 = false;
    }
  }

  select(para: any) {
    this.myItem = para;
  }
}
