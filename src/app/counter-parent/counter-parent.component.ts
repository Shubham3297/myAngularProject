import { Component, OnInit, ViewChild } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { MyDirectoryDirective } from '../shared/customeDir/my-directory.directive';

@Component({
  selector: 'app-counter-parent',
  templateUrl: './counter-parent.component.html',
  styleUrls: ['./counter-parent.component.css']
})
export class CounterParentComponent implements OnInit {
  @ViewChild(CounterComponent) counterComp: CounterComponent | undefined;

  @ViewChild(MyDirectoryDirective) mycolor: MyDirectoryDirective | undefined;


  message: any;

  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.counterComp?.counterIncrement();
    this.message = this.counterComp?.counterMsg;
  }

  decrement() {
    this.counterComp?.counterDecrement();
    this.message = this.counterComp?.counterMsg;
  }

  colorChange(color: any) {
    this.mycolor?.change(color);
  }
}
