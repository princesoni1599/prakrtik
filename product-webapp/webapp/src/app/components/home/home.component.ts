import { HomeService } from './../../home.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private home:HomeService) {}
  ngOnInit(): void {
    this.home.saveUser(this.items).subscribe((result)=>{
      console.warn(result);
    })
  }
   items:any = [
    { 
      name:"Tom", 
      price: 500},
    { 
      name:"ram", 
      price: 500
    }
  ];




  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });



  onSubmit(): void {
    // Process checkout data here
    console.warn('Your order has been submitted', this.checkoutForm.value);
    let x=  this.checkoutForm.value;

    this.checkoutForm.reset();
  }
}
