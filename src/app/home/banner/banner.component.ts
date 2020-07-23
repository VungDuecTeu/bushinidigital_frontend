import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { UserAccount } from 'src/app/models/UserAccount';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(private router:Router, private auth:AuthService) { }
  
  user:UserAccount;

  ngOnInit() {
  }

  login():void {
    this.router.navigate(["/login"]);
  }

}
