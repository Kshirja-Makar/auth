import { Component, OnInit } from '@angular/core';
import {DataService} from '../service/data.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!:FormGroup
submitted=false;
data:any;
token:any;

  constructor(private dataService:DataService, private toastr:ToastrService, private formBuilder:FormBuilder) { 

  }

  loginForm(){
    this.form=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
    this.loginForm();
  }
  get f(){
    return this.form.controls;
  }
  submit()
  {this.submitted=true;

    if(this.form.invalid){
      return;
    }
    this.dataService.login(this.form.value).subscribe(res=>{
      this.data=res;
      if(this.data.status===1){
        

      }

    });
  }

}
