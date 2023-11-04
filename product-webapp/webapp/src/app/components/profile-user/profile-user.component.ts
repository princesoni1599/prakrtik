import { Router } from '@angular/router';
import { NotifierService } from './../../services/notifier.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})

export class ProfileUserComponent implements OnInit
{
    ngForm:FormGroup;

    public getJsonValue: any;
    public putJsonValue: any;
    public deleteJsonValue: any;
    public getAllJsonValue: any;
    public postJsonValue: any;
    email:string=window.localStorage.getItem('loginEmail');
    constructor(private fb:FormBuilder, private notifier:NotifierService, private http:HttpClient, private service: ApiService, private route:Router){

    }
    ngOnInit(): void {
      this.ngForm= new FormGroup({

      name:new FormControl("",Validators.required),
      firstName:new FormControl("",Validators.required),
      lastName:new FormControl("",Validators.required),
      email:new FormControl("",Validators.required),
      password:new FormControl("",Validators.required),
      dob:new FormControl("",Validators.required),
      gender:new FormControl("",Validators.required),
      contactNumber:new FormControl("",Validators.required),
      userRole:new FormControl("",Validators.required),
      address:new FormControl("",Validators.required),
      
      });

   
        this.service.getCurrentUserDetails(this.email).subscribe((data) => {
          this.ngForm=new FormGroup({
            name:new FormControl(data['name']),
          firstName:new FormControl(data['firstName']),
          lastName:new FormControl(data['lastName']), 
          email:new FormControl(data['email']),
          password:new FormControl(data['password']),
          userRole:new FormControl(data['userRole']),
          dob:new FormControl(data['dob']),
          gender:new FormControl(data['gender']),
          contactNumber:new FormControl(data['contactNumber']),
          address:new FormControl(data['address']),
       
        });
        })
      
   
      // this.getMethod();
  };
  

  // public getMethod(){
  //   this.http.get('http://localhost:8083/api/v1/get/').subscribe((data) => {
  //     console.log(data);
  //     this.getJsonValue = data;
  //   })
  // }

  
  
  // Updated(){
  //   this.notifier.showNotification('Upadated Successfully', 'ok')
  // }


  
  Updated(){
    this.service.UpdateUserDetails(this.ngForm.value,this.email).subscribe((res)=>
    this.notifier.showNotification('Details Updated Succesfully','OK'))
   }
}







