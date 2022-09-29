import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegName, myCourses, RegPassword, RegEmail, RegContact } from 'src/app/shared/constant/constantData';

@Component({
  selector: 'app-rtf',
  templateUrl: './rtf.component.html',
  styleUrls: ['./rtf.component.css']
})
export class RtfComponent implements OnInit {

  stdForm: any;
  courses = myCourses;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.stdForm = new FormGroup({
    //   stdName: new FormControl('', [Validators.required, Validators.pattern(RegName)]),
    //   // stdPassword: new FormControl(''),
    //   // stdEmail: new FormControl(''),
    //   // stdContct: new FormControl('')
    //   stdCourses: new FormControl('', [Validators.required]),
    //   stdTerm: new FormControl('', [Validators.requiredTrue])
    // })

    this.stdForm = this.fb.group({
      stdName: ['', [Validators.required, Validators.pattern(RegName)]],
      stdCourses: ['', Validators.required],
      stdTerm: ['', Validators.requiredTrue],
      stdPassword: ['', [Validators.required, Validators.pattern(RegPassword)]],
      stdEmail: ['', [Validators.required, Validators.pattern(RegEmail)]],
      stdContact: ['', [Validators.required, Validators.pattern(RegContact)]]
    })
  }
  getData(val: any) {
    console.log(val);
  }
}
