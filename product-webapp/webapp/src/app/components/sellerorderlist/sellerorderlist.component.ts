import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-sellerorderlist',
  templateUrl: './sellerorderlist.component.html',
  styleUrls: ['./sellerorderlist.component.css']
})
export class SellerorderlistComponent implements OnInit {

  SellerList:any;
  ownerEmailId:string=window.localStorage.getItem('loginEmail');

  constructor(private httpClient: HttpClient , private service:ApiService) {
    this.SellerList=[];
   }
  ngOnInit(): void {
    this.getSellerList(this.ownerEmailId);
  }

  getSellerList(ownerEmailId:string){
    this.service.getSellerList(ownerEmailId).subscribe(response=>{
      console.log(response);
      this.SellerList=response;
    })
    }}
