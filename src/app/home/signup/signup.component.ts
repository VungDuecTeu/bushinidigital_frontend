import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../auth/auth.service';
import { AutofillMonitor } from '@angular/cdk/text-field';

export interface DialogData {
  email : FormControl;
  password : FormControl;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(LoginDialog, {
      width: '250px',
      height: '1000px',
      data: {email: this.email, password: this.password}
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   this.email = result;
    // });
  }
}

@Component({
  selector: 'login-dialog',
  templateUrl: 'logindialog.html',
})
export class LoginDialog {

  constructor(
    public dialogRef: MatDialogRef<LoginDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private auth: AuthService) {}
  
  onClick(): void {
    // this.auth.login();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
