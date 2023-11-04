import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';



@Component({
  selector: 'app-customerorderlist',
  templateUrl: './customerorderlist.component.html',
  styleUrls: ['./customerorderlist.component.css']
})
export class CustomerorderlistComponent implements OnInit {
  orderedData:any;
  cards:any;
  orderList:any;
  customerEmailId:string=window.localStorage.getItem('loginEmail');
  
productId:string;
  constructor(private httpClient: HttpClient, private _snackBar: MatSnackBar,private service:ApiService) {
    this.orderList=[];
    this.cards=[];
    this.orderedData=[];

   }
  //  for (var index in imageList) {
  //   console.log(val); // prints values: 10, 20, 30, 40
  // }

  ngOnInit(): void {
  this.getorderList(this.customerEmailId);
  this.getAllProducts(this.productId);
  }

  getorderedData(orderId:string){
      this.service.getOrderedlistByorderId(orderId).subscribe((result:any)=>{
        this.orderedData=result;
         console.log(result);
      })
  }

//  this.service.testCallback.subscribe(this.request, this.success(r), this.error());

  getorderList(customerEmailId:string){
    this.service.getOrderedlist(customerEmailId).subscribe((result:any)=>{
      
      this.orderList=result;
    }, this.callImage
    
    )
       //console.log(this.image(result[0].productId));    
   
  }

  callImage(){
    this.orderList.forEach(function (value) {
      console.log(value.productId);

//    // this.image(value.productId);
//     // this.service.getPictureById(value.productId).subscribe((res:any)=>{
//     //   value.image = res.productImage;
//     //   console.log(value);
//     // })

      localStorage.setItem("productId",value.productId);
 });

  }

//   image(value:any) {
//     this.service.getPictureById(value).subscribe((res:any)=>{
//          //  value.image = res.productImage;
//            console.log(res.productImage);
//          }) 
//  }
  
  // getImage(productId:string){
  //   this.service.getCurrentData(productId).subscribe((result:any)=>{
  //     this.cards=result;
  //     console.log(result);
  //   })
  // }

  getAllProducts(productId:string){
    this.service.getPictureById(productId).subscribe((res:any)=>{
      console.log(res);
      this.cards=res;
    })
  }


 
  CancelOrderById(orderId:string, message: string, action: string){
    this.service.CancelOrder(this.orderedData,orderId).subscribe((result:any)=>{

      console.log(result);
      message='Order Cancelled',
      action='Successfully done !!'
      this._snackBar.open(message, action);

    })
    
    location.reload();
  }
}

function mergeMap(arg0: (res2: any) => any): null {
  throw new Error('Function not implemented.');
}
