import { ApiService } from 'src/app/services/api.service';
import { SellerhomepageComponent } from './../sellerhomepage/sellerhomepage.component';
import { SellerComponent } from './../seller/seller.component';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';



@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

details:any;

addToCart() {
throw new Error('Method not implemented.');
}
pageTitle: any="plant details";






  constructor(private service:ApiService) {
    // this.details=this.service.getProductDetails();
  }

   //to call from service method

  ngOnInit(): void {
    this.service.getProductDetails().subscribe(val => this.details=val);
    // console.warn(this.details);
  }

}
