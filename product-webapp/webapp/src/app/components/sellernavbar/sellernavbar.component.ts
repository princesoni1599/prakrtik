import { LocationStrategy } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-sellernavbar',
  templateUrl: './sellernavbar.component.html',
  styleUrls: ['./sellernavbar.component.css']
})
export class SellernavbarComponent implements OnInit {
  isExpanded: boolean = false;

  constructor(private service:ApiService,private httpClient: HttpClient,private route:Router) { 
  }
  emailid :string
  
  ngOnInit(): void {
  
    this.emailid=window.localStorage.getItem('loginEmail');
    console.log(this.emailid);
  }
  
 LogOut(){
  this.route.navigate(['/']);
  localStorage.clear();
 }
}
