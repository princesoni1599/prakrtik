import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor(private service:ApiService) { }
  gender_bool:boolean=false;

  user:any;
  email:string=window.localStorage.getItem('loginEmail')
  ngOnInit(): void {
   this.service.getUserByEmail(this.email).subscribe(val => {this.user=val, this.gender()});
  }
  gender()
  {
    if(this.user.gender=="female")
    {
      this.gender_bool=true;
       console.warn(this.gender_bool);
    }
  }
 
}
