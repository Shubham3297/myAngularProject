import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/services/global.service';
import { MyServiceService } from 'src/app/shared/services/my-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number = 0;
  empObj: any;

  constructor(private _actRoute: ActivatedRoute, private _mySer: MyServiceService, private _route: Router, private _globalSer: GlobalService) { }

  ngOnInit(): void {
    this._actRoute.paramMap.subscribe((para) => {
      this.id = Number(para.get('id'));
      // console.log(this.id);
    })

    // this._mySer.getSingleRecord(this.id).subscribe((res) => {
    //   // console.log(res);
    //   this.empObj = { ...res };
    // })

    // for global service 
    this._globalSer.getsingleRecord("employees", this.id).subscribe((res) => {
      this.empObj = { ...res };
    })
  }


  sendData(val: any) {
    const empObj = {
      id: this.id,
      name: val.name,
      post: val.post,
      salary: val.salary,
      gender: val.gender,
      address: val.address
    }
    this._mySer.updateRecord(empObj).subscribe(() => {
      alert("Record updated successfully.");
      this._route.navigate(['/crud']);
    })
  }
}
