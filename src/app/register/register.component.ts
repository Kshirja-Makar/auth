import { Component, OnInit } from '@angular/core';
import { MustMatch } from '../confirmed.validater';
import {DataService} from '../service/data.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
form!:FormGroup;
submitted= false;
data:any;


  constructor(private formBuilder:FormBuilder, private dataService: DataService,private toastr:ToastrService) { }
  createForm(){
    this.form=this.formBuilder.group({
      firstName:[null,Validators.required],
      lastName:[null,Validators.required],
      email:['',Validators.required],
      phone:[null,Validators.required],
      referedBy:[null,Validators.required],
      password:['',Validators.required],
      confirm_password:['',Validators.required],
    },
    {validator:MustMatch('password','confirm_password')});
  }

  ngOnInit(): void {
    this.createForm();
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    this.submitted=true;
    if(this.form.invalid){
      console.log('res');
      return ;
      
    }
    this.dataService.registerUser(this.form.value).subscribe(res=>{
      this.data=res;
      console.log(this.data);
      if(this.data.status===1){
        this.toastr.success(JSON.stringify(this.data.message),JSON.stringify(this.data.code),{
          timeOut:2000,
          progressBar:true
        })
      }
      else{
      this.toastr.error(JSON.stringify(this.data.message), JSON.stringify(this.data.code),{
        timeOut:2000,
        progressBar:true
      });
    }
    
    });
  }

}
