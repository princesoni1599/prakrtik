import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cusproductdetails',
  templateUrl: './cusproductdetails.component.html',
  styleUrls: ['./cusproductdetails.component.css']
})
export class CusproductdetailsComponent implements OnInit {
[x: string]: any;

  constructor(public service:ApiService) { }
  details:any;
  
  //  wnd = window.open("about:blank", "");
   wnd:any;
  ngOnInit(): void {
    this.service.getProductDetails().subscribe(val => {this.details=val});
  }
  buyNow(){
    // this.wnd = window.open("about:blank", "");
    // this.service.getPaymentPage().subscribe(val => console.warn(val));
    // this.service.postPaymentPage(this.details);
      // this.service.postProduct(this.data);
      window.open("http://localhost:8080/payment-service/"+this.details.productPrice+"/"+this.details.productName+"/"+this.details.productId);
      console.log(this.details);
    }
}
// {
//   "orderId": "120",
//   "customerName": "Mohan",
//   "productName": "Rose",
//   "productPrice": "150",
//   "customerEmailId": "abc@gmail.com",
//   "ownerName": "Raju",
//   "ownerEmailId": "raju@gmail.com",
//   "ownerAddress": "MUMBAI",
//   "orderDate": "13/11/2022",
//   "Quantity": "2",
//   "ownerContactNo": " 8574963223",
//   "customerContactNo": "9504642479"
// }