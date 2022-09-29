import { Component, OnInit, TemplateRef } from '@angular/core';
import { MyServiceService } from 'src/app/shared/services/my-service.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  p: number = 1;
  searchRecord: string = '';
  order: string = "name";
  // toggle: boolean = true;
  toggle: boolean = false;

  modalRef?: BsModalRef;
  constructor(private _dbSer: MyServiceService, private modalService: BsModalService, private _globalSer: GlobalService) { }

  empData: any;

  ngOnInit(): void {
    this.fetchData();
  }

  // Code for modelPop
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  fetchData() {
    // Multiple service for multiple tables - in this table not defined
    // this._dbSer.getRecord().subscribe((res) => {
    //   this.empData = res;
    //   // console.log(this.empData);
    // })

    // Single service (global service) for multiple tables - in this methode , table defined
    this._globalSer.getRecord('/employees').subscribe((res) => {
      this.empData = res;
    })
  }

  changeOrder() {
    this.toggle = !this.toggle;
  }

  deleteData(val: any) {
    if (confirm(`Are You Sure To Delete Record With ${val}`)) {
      this._dbSer.deleteRecord(val).subscribe(() => {
        alert("Record Deleted Successfully");
        this.fetchData();
      })
    }
  }
}
