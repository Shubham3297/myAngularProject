import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../shared/services/global.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private _globalSer: GlobalService, private _route: Router) { }

  ngOnInit(): void {
  }

  signOut() {
    if (confirm("Are You Sure To Logout.")) {
      this._globalSer.logout();
      this._route.navigate(["/"]);
    }
  }
}
