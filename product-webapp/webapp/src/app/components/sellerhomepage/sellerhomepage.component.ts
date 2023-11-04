import { ProductdetailsComponent } from './../productdetails/productdetails.component';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { NotifierService } from 'src/app/services/notifier.service';
import { SellerComponent } from '../seller/seller.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sellerhomepage',
  templateUrl: './sellerhomepage.component.html',
  styleUrls: ['./sellerhomepage.component.css']
})
export class SellerhomepageComponent implements OnInit {
  dataSource !: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator !: MatPaginator ;
  @ViewChild(MatSort) sort !: MatSort;
plantmodels:string[];
ownerEmailId:string=window.localStorage.getItem('loginEmail')
  constructor(private service:ApiService,private notifierService:NotifierService,private router:Router, private route: ActivatedRoute, private dialog: MatDialog, private http:HttpClient) {
    this.plantmodels=[]
   }
  displayedColumns:string[]=['productsAvailable','productName','productPrice','productAddress','productAge','sizeOfProduct','action'];

  ngOnInit(): void {
    this.getAllProducts(this.ownerEmailId);
  }
  getAllProducts(ownerEmailId:string){
    this.service.getProductListByownerEmailID(ownerEmailId).subscribe(res=>{
     
      this.plantmodels=res;
      console.log(this.plantmodels)
    })
  }

  deleteProduct(productId:string){
    this.service.deleteProduct(productId).subscribe(()=>{
      this.notifierService.showNotification('Product Deleted Succesfully','OK');
    this.getAllProducts(this.ownerEmailId);
      
     //,error:()=>{
    //    this.notifierService.showNotification('error while deleting the record','OK');
    //  }
  })
    
  location.reload();
  }
  // deleteProduct(productId:string){
  //   this.http.delete("http://localhost:8082/api/v1//delete/"+productId).subscribe(()=>{
  //     this.notifierService.showNotification('Product deleted successfully','ok');
  //   });
  // }



// display = false;
openDialog(productId:string) {

  this.service.getProductById(productId);

  const dialogConfig = new MatDialogConfig();

  dialogConfig.disableClose = false;
  dialogConfig.autoFocus = true;
  // dialogConfig.maxHeight='90vh';
  dialogConfig.maxWidth='60vh';

  this.dialog.open(ProductdetailsComponent,dialogConfig);
  


}

}
