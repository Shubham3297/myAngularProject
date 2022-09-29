import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from '../shared/services/my-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any;
  pass: any;
  userArray: any;

  constructor(private _dbser: MyServiceService, private _router: Router) { }

  ngOnInit(): void {
  }

  check() {
    // console.log(this.user + " " + this.pass); for checking login data working or not only
    this._dbser.getUser().subscribe((res) => {
      this.userArray = res;
      // console.log(this.userArray);

      const data = this.userArray.filter((item: any) => {

        return this.user == item.user && this.pass == item.password;

      })

      if (data.length > 0) {
        this._dbser.login(this.user);
        this._router.navigate(['/databinding']);
      } else {
        alert("Invalid Credential");
        this.user = "";
        this.pass = "";
      }
    })
  }
}
