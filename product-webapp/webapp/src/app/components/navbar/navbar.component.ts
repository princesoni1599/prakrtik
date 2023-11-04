import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isExpanded: boolean = false;

  constructor(private service:ApiService,private httpClient: HttpClient,private route:Router) { 
  }
  emailid :string
  
  ngOnInit(): void {
  
    this.emailid=window.localStorage.getItem('loginEmail');
    console.log(this.emailid);
  }
  LogOut(){
    this.route.navigate(['/register']);
    localStorage.clear();
   }
}
