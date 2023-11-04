
import { BrowserModule } from "@angular/platform-browser";
import {MatDialogModule} from '@angular/material/dialog';
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from "./components/home/home.component";
import { HomeService } from './home.service';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SellernavbarComponent } from "./components/sellernavbar/sellernavbar.component";
import { SellerhomepageComponent } from "./components/sellerhomepage/sellerhomepage.component";
import { SellerorderlistComponent } from "./components/sellerorderlist/sellerorderlist.component";
import { ProductdetailsComponent } from "./components/productdetails/productdetails.component";
import { MatCardModule } from "@angular/material/card";
import { MatRadioModule } from "@angular/material/radio";
import { MatIconModule } from "@angular/material/icon";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatSliderModule } from "@angular/material/slider";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatButtonModule } from "@angular/material/button";
import { MatStepperModule } from "@angular/material/stepper";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { HttpClientModule } from "@angular/common/http";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { SellerComponent } from "./components/seller/seller.component";
import { MatTableModule } from "@angular/material/table";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { ProfileUserComponent } from './components/profile-user/profile-user.component';
import { UpdateproductlistComponent } from './components/updateproductlist/updateproductlist.component';
import { CustomerhomepageComponent } from './customerhomepage/customerhomepage.component';
import { CustomerorderlistComponent } from './components/customerorderlist/customerorderlist.component';
import {MatListModule} from '@angular/material/list';
//import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
//import {NgxPaginationModule} from 'ngx-pagination';
import { MatTooltipModule } from '@angular/material/tooltip'; 


import { RegisterUserComponent } from './components/register-user/register-user.component';
import { MatNativeDateModule } from "@angular/material/core";
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { CusproductdetailsComponent } from './components/cusproductdetails/cusproductdetails.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { SearchByNamePipe } from './search-by-name.pipe';
import { SeedslistComponent } from './components/seedslist/seedslist.component';
import { MedicinesComponent } from './components/medicines/medicines.component';
import { UpdateseedsComponent } from './components/updateseeds/updateseeds.component';
import { UpdatemedicinesComponent } from './components/updatemedicines/updatemedicines.component';
import { ProductImageComponent } from './product-image/product-image.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SellernavbarComponent,
    SellerhomepageComponent,
    SellerComponent,
    SellerorderlistComponent,
    ProfileUserComponent,
    CustomerorderlistComponent,
    UpdateproductlistComponent,
    CustomerhomepageComponent,
    ProductdetailsComponent,
    RegisterUserComponent,
    UserprofileComponent,
    CusproductdetailsComponent,
    LandingpageComponent,
    SearchByNamePipe,
    SeedslistComponent,
    MedicinesComponent,
    UpdateseedsComponent,
    UpdatemedicinesComponent,
    ProductImageComponent,
  
  ],
  imports: [
    AppRoutingModule,
    MatRadioModule,
    MatCardModule,
    MatIconModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatSliderModule,
    MatPaginatorModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    MatSelectModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTableModule,
    MatSnackBarModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    //MatGridListModule,
   // NgxPaginationModule,
    MatListModule,

    
    MatMenuModule,
    MatDialogModule,
    MatGridListModule,
    MatTabsModule,
    MatNativeDateModule,
    MatTooltipModule
   // NgxPaginationModule, 
  ],
  providers: [HomeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
