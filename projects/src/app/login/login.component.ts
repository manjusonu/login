import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})








export class LoginComponent implements OnInit {

  
  uname = ""
  pswd = ""

  loginForm = this.fb.group({



    uname: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]

  })


  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  login() {

    var uname = this.loginForm.value.uname
    var pswd = this.loginForm.value.pswd
    if (this.loginForm.valid) {
      this.ds.login(uname, pswd)


        .subscribe((result: any) => {
          if (result) {
            alert(result.message)
            
            localStorage.setItem("currentUserName", JSON.stringify(result.currentUserName))
            
            
          }
        },
          (result) => {
            alert(result.error.message)
          }
        )

    }
    else {
      alert("Invalid Form")
    }
  }
}