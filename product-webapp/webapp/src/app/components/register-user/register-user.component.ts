import { Component, OnInit } from '@angular/core';
import { RegisterService } from "../../services/register/register.service";
import { UserRegistration } from "../../models/register/user-registration";
import { Validators } from "@angular/forms";  
import Swal from "sweetalert2";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
 
} from '@angular/forms';
import { LoginService } from '../../services/login/login.service';
import { UserDao } from '../../models/login/user-dao';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { NotifierService } from 'src/app/services/notifier.service';
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user: UserRegistration = new UserRegistration();
  errorMessage1: String = "";
  //private registerService: RegisterService;
  form: FormGroup;
  submitted = false;
  errorMessage:string;
  
  //constructor(private registerService: RegisterService,private router: Router) {}
    
  userRole:string;
  roles :string[]=['Buyer','Seller'];

  constructor(private registerService: RegisterService,private formBuilder: FormBuilder,private loginService:LoginService,private router: Router,private snackBar:MatSnackBar, private notifier:NotifierService) {
    this.form=new FormGroup({
      email:new FormControl(""),
      password:new FormControl(""),
      userRole:new FormControl("")
    });
  }
  


  ngOnInit() {
  }
  loginObj:UserDao=new UserDao();
  
  SaveData(): void {
  

  
    console.log("FORMDATA",this.form.value);
    this.loginObj.email=this.form.value.email;
    this.loginObj.password=this.form.value.password;
    this.loginObj.userRole=this.form.value.userRole
    this.loginService.loginUser(this.loginObj).subscribe(data=>{
      console.log("validated",data);
      localStorage.setItem("loginEmail",this.loginObj.email)
      localStorage.setItem("userRole",this.loginObj.userRole)
     
      if(this.form.value.userRole=='buyer'){
        this.router.navigate(['/navbar/customerhomepage'])
      }else if(this.form.value.userRole=='seller'){
        this.router.navigate(['/sellerhomepage/home'])
      }
      this.form.reset();
     
    },(
      error=>{
        this.notifier.showNotification("Incorrect Email/Password", "Dismiss");
        // console.log(error);
         this.errorMessage=error.error;

      }
      )
      )
      
     }
     SaveData1() {
     
      this.registerService.registerUserMySQL(this.user).subscribe(res=>{
        console.log(this.user);
      })
      //console.log(this.favoriteSeason);
      if (
        this.user.email == "" ||
        this.user.password == "" || this.userRole ==""
      ) {
       
        // this.snackBar.open( "Fields cannot be empty!","Dissmiss");
        this.notifier.showNotification("Fields cannot be empty!","Dissmiss");
      } 
      
       
     
       else {
        this.registerService.registerUser(this.user).subscribe(
          (data) => {
           
            // this.snackBar.open("Successfully done !!","success");
            this.notifier.showNotification("Successfully done !!","success");
          },
          (error) =>
           (
            // this.snackBar.open("User Already Exist!","error")
            this.notifier.showNotification("User Already Exist!","error")
        ))
      
      }
    } 
}