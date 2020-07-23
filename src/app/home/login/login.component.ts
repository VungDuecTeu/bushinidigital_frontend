import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Overlay } from '@angular/cdk/overlay';
import { UserAccount } from 'src/app/models/UserAccount';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:String;
  password:String ;
  selected = new FormControl(0);
  user:UserAccount;

  constructor(private auth:AuthService) { }

  ngOnInit(): void {

  }

  login():void {
    localStorage.removeItem("token");

    this.auth.login(this.email,this.password).subscribe( (item) => {
      console.log(item);
      localStorage.setItem("token", item)});
      this.auth.getUser(this.email).subscribe((item) => console.log(item));
  }

}
