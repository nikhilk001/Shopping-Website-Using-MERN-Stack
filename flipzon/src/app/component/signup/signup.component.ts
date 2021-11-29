import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm!:FormGroup
  constructor(private formBuidler:FormBuilder, private _http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.signupForm= this.formBuidler.group({
      name:[''],
      userid:[''],
      email:[''],
      password:['']
    })
  }
  //make method to create user
  signUp(){
    this._http.post<any>("http://localhost:3001/signup", this.signupForm.value).subscribe(res=>
    {alert("User succesfully registered");
    this.signupForm.reset();
    this.router.navigate(['login'])
  }, err=>{
    alert("ERROR SOMETHING WENT WRONG ")
  } )
  }
}
