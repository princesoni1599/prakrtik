import { CustomerhomepageComponent } from './customerhomepage/customerhomepage.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerorderlistComponent } from './components/customerorderlist/customerorderlist.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileUserComponent } from './components/profile-user/profile-user.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { SellerComponent } from './components/seller/seller.component';
import { SellerhomepageComponent } from './components/sellerhomepage/sellerhomepage.component';
import { SellernavbarComponent } from './components/sellernavbar/sellernavbar.component';
import { SellerorderlistComponent } from './components/sellerorderlist/sellerorderlist.component';
import { UpdateproductlistComponent } from './components/updateproductlist/updateproductlist.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { SeedslistComponent } from './components/seedslist/seedslist.component';
import { MedicinesComponent } from './components/medicines/medicines.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';


const routes: Routes = [
   {path: 'register', component: RegisterUserComponent},
{path:'', component:LandingpageComponent},
   
  {
  path: 'sellerhomepage',
  component: SellernavbarComponent,
  children : [
{path: 'home', component: SellerhomepageComponent
},
{path: 'Editprofile', component: ProfileUserComponent
},
{
  path: 'seller', component: SellerComponent
},
{
  path: 'seedslist', component: SeedslistComponent
},
{
  path: 'medicines', component: MedicinesComponent
},
{
  path: 'orderList', component: SellerorderlistComponent
},
{
  path: 'seller/update/:id', component: UpdateproductlistComponent
},
{
  path: 'profile', component: UserprofileComponent
},
{
  path: 'custhome', component: CustomerhomepageComponent
}
]
},
{
  path: 'navbar', component: NavbarComponent,
  children: [
    {
      path: 'customerhomepage', component: CustomerhomepageComponent
    },
    {
      path: 'customerorderlist', component: CustomerorderlistComponent
    },
    {path: 'Editprofile', component: ProfileUserComponent
},
{
  path: 'profile', component: UserprofileComponent
},
  ]
},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
