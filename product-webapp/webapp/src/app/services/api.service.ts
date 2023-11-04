import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = "http://localhost:8080";
  // baseUrl = "https://prakritik.stackroute.io";

  details:any;
  constructor(private http:HttpClient) { }
  getUserByEmail(email:string)
  {
      return this.http.get<any>(this.baseUrl+"/registration-service/api/v1/get/"+email);
  }
  postProduct(data:any){
    return this.http.post<any>(this.baseUrl+"/plant-service/api/v1/addproduct",data);
  }
  //post-data
  savePlantModel(productObj:any, productImage:File){
    const data: FormData=new FormData();
    data.append('file',productImage);
    data.append('plantModel', JSON.stringify(productObj));
    return this.http.post(this.baseUrl+"/plant-service/api/v1/addproduct",data)
  }

    // return this.http.post<any>("http://localhost:3000/seller/",data);

  
  getProduct(){
    return this.http.get<any>(this.baseUrl+"/plant-service/api/v1/listofAllProduct");
  }
  // putProduct(data:any,productId:string){
  //   return this.http.put<any>("http://localhost:8082/api/v1/update/"+productId,data);
  //  }

  updatePlantModel(productObj:any, productImage:File){
    const data: FormData=new FormData();
    data.append('file',productImage);
    data.append('plantModel', JSON.stringify(productObj));
    return this.http.post(this.baseUrl+"/plant-service/api/v1/update/{productId}",data);
  }

  putProduct(data:any,productId:string){
    return this.http.put<any>(this.baseUrl+"/plant-service/api/v1/update/"+productId,data);
   }

   deleteProduct(productId:string){
     return this.http.delete<any>(this.baseUrl+"/plant-service/api/v1//delete/"+productId);
   }
   getOrderedlist(customerEmailId:string){
    return this.http.get<any>(this.baseUrl+"/customer-service/api/v1/customerBookingDetails/"+customerEmailId);
  }
    
   getCurrentData(productId:string){
    return this.http.get<any>(this.baseUrl+"/plant-service/api/v1/get/"+productId);
  }
  // getEmailid(){
  //   return this.http.get<any>("http://localhost:3000/emailid/");
  // }
  getProductById(productId:string){
    this.details =this.http.get<any>(this.baseUrl+"/plant-service/api/v1/get/"+productId);
  }
  getProductDetails(){
    return this.details;
  }
  getProductImageById(productId:string){
    return this.details =this.http.get<any>(this.baseUrl+"/plant-service/api/v1/get/"+productId);
  }
  postPaymentPage(data:any){
    return this.http.post<any>(this.baseUrl+"/payment-service/paymentData",data);
  }
  getCurrentUserDetails(email:string){
    return this.http.get<any>(this.baseUrl+"/registration-service/api/v1/get/"+email);
  }
  getSellerList(ownerEmailId:string){
    return this.http.get<any>(this.baseUrl+"/customer-service/api/v1/ownerProductDetail/"+ownerEmailId);
  }
  CancelOrder(data:any,orderId:string){
    return this.http.put<any>(this.baseUrl+"/customer-service/api/v1/CancelOrder/"+orderId,data);
  }

  getOrderedlistByorderId(orderId:string){
    return this.http.get<any>(this.baseUrl+"/customer-service/api/v1/getOrder/"+orderId);
  }
  getPictureById(productId:string){
     return this.http.get<any>(this.baseUrl+"/plant-service/api/v1/get/"+productId);
  }
  UpdateUserDetails(data:any,email:string){
  return this.http.put<any>(this.baseUrl+"/registration-service/api/v1/update/"+email,data) 
  }
  // getOrderedlistByorderId(orderId:string){
  //   return this.http.get<any>("http://localhost:8032/api/v1/customerBookingDetails/"+orderId);
  // }
  getProductListByownerEmailID(ownerEmailId:string){
    return this.http.get<any>(this.baseUrl+"/plant-service/api/v1//ProductList/"+ownerEmailId);
  }


}
