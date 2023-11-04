import { CusproductdetailsComponent } from './../components/cusproductdetails/cusproductdetails.component';
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-customerhomepage',
  templateUrl: './customerhomepage.component.html',
  styleUrls: ['./customerhomepage.component.css']
})
export class CustomerhomepageComponent implements OnInit {
  
  cards: any;
  

  constructor(private service:ApiService,private httpClient: HttpClient, private dialog: MatDialog) { 
    this.cards=[];
  }
  ids:any;
  public plant; 
  public psearch:string='';
  ngOnInit(): void {
    // this.retrivedImage='data:image/jpg;base64,'+this.plantModel.productImage;
   this.getAllProducts();
    // this.service.getProduct().subscribe(data=>{
    //   this.plant=data;
    // })
  }
  
  getAllProducts(){
    this.service.getProduct().subscribe({next:(response)=>this.cards=response});
  }
    openDialog(productId:string) {
    
      this.service.getProductById(productId);
      const dialogConfig = new MatDialogConfig();
    
      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = true;
      // dialogConfig.maxHeight='90vh';
      dialogConfig.maxWidth='60vh';
    
    
      this.dialog.open(CusproductdetailsComponent,dialogConfig);
    }
}
