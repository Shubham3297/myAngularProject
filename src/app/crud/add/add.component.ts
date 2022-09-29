import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from 'src/app/shared/services/my-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private _dbSer: MyServiceService, private _router: Router) { }

  ngOnInit(): void {
  }

  sendData(val: any) {
    const empObj = {
      name: val.name,
      post: val.post,
      salary: val.salary,
      gender: val.gender,
      address: val.address
    }
    this._dbSer.addRecord(empObj).subscribe(() => {
      alert("Record Added in Database");
      this._router.navigate(['/crud']);
    })
  }
}
