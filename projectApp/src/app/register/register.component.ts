import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})





export class RegisterComponent implements OnInit {
  uname = ""

  pswd = ""

  registerForm = this.fb.group({


    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],

    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]

  })



  constructor (private router: Router, private ds: DataService,  private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  register() {
    console.log(this.registerForm)



    if (this.registerForm.valid) {



      var uname = this.registerForm.value.uname

      var pswd = this.registerForm.value.pswd



      this.ds.register(pswd, uname)
        .subscribe((result: any) => {
          if (result) {
            alert(result.message)
            this.router.navigateByUrl("")
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