import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';





const options = {
  headers: new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})

export class DataService {

  currentUserName: any

  

  users: any = {
    1000: { uname: "Anju", password: "1000", },
    1001: { uname: "Thomas", password: "1001", },
    1002: { uname: "Ruby", password: "1002", }
  }

  constructor(private http: HttpClient) {



  }




  register(password: any, uname: any) {
    const data = {

      password,
      uname
    }
    return this.http.post('http://localhost:3000/register', data)

  }



  login(uname: any, password: any) {

    const data = {
      uname,
      password

    }
    return this.http.post('http://localhost:3000/login', data)

  }
}
