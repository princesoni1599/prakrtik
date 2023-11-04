import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { PlantModel } from 'src/app/plantmodel';


import { ApiService } from 'src/app/services/api.service';
import { NotifierService } from 'src/app/services/notifier.service';

@Component({
  selector: 'app-seedslist',
  templateUrl: './seedslist.component.html',
  styleUrls: ['./seedslist.component.css']
})
export class SeedslistComponent implements OnInit { 
  @ViewChild('stepper') stepper: MatStepper;
productObject: PlantModel = new PlantModel();
profileFormGroup!: FormGroup;
files: any[] = [];


constructor(private fb:FormBuilder,private service: ApiService,private notifierService: NotifierService,private router:Router ){

}

ngOnInit(): void {
  this.profileFormGroup= new FormGroup({
   ownerEmailId:new FormControl(window.localStorage.getItem('loginEmail'),Validators.required),
   shopName:new FormControl("",Validators.required),
   ownerContactNo:new FormControl("",Validators.required),
 productId:new FormControl(""),
 productsAvailable:new FormControl("",Validators.required),
 productName:new FormControl("",Validators.required),
 productPrice:new FormControl("",Validators.required),
 productAddress:new FormControl("",Validators.required),
 productImage:new FormControl(""),
 productAge:new FormControl("",Validators.required),
 sizeOfProduct:new FormControl("",Validators.required),
 waterRequirement:new FormControl("",Validators.required),
 sunlightRequirement:new FormControl("",Validators.required),
 toxicity:new FormControl("",Validators.required),
 description:new FormControl("",Validators.required),
  });
     console.log(this.profileFormGroup.value);
 }
 OnSubmit(){
   console.log('formValue', this.profileFormGroup.value);
   this.productObject.productName = this.profileFormGroup.value.productName;
   this.productObject.shopName = this.profileFormGroup.value.shopName;
   this.productObject.productsAvailable = this.profileFormGroup.value.productsAvailable;
   this.productObject.ownerContactNo= this.profileFormGroup.value.ownerContactNo;
   this.productObject.productPrice = this.profileFormGroup.value.productPrice;
   this.productObject.ownerEmailId= this.profileFormGroup.value.ownerEmailId;
   this.productObject.productAddress= this.profileFormGroup.value.productAddress;
   this.productObject.productAge= this.profileFormGroup.value.productAge;
   this.productObject.sizeOfProduct= this.profileFormGroup.value.sizeOfProduct;
   this.productObject.waterRequirement= this.profileFormGroup.value.waterRequirement;
   this.productObject.sunlightRequirement= this.profileFormGroup.value.sunlightRequirement;
   this.productObject.toxicity= this.profileFormGroup.value.toxicity;
   this.productObject.description= this.profileFormGroup.value.description;
   this.productObject.productId=this.profileFormGroup.value.productId;

   this.service.savePlantModel(this.productObject, this.files[0]).subscribe((result) => {
    this.notifierService.showNotification('Product Added Succesfully','OK')
        this.profileFormGroup.reset();
       
        this.router.navigate(['/sellerhomepage/home']);
   })
   
 }    

days: string[] = ['Once a week', 'Twice a week', 'Thrice a week', 'Everyday'];
ages: string[]=['null'];

sunlightRequirement!: string;
parts:string[]=['Full sun - Plants need at least 6 hours of direct sun daily',
                'Part sun – Plants thrive with between 3 and 6 hours of direct sun per day',
                'Part shade – Plants require between 3 and 6 hours of sun per day, but need protection from intense mid-day sun',
                'Full shade – Plants require less than 3 hours of direct sun per day'];


sizeOfPlant!: string;
sizes:string[]=['NA']

toxicity!:string;
results:string[]=['Yes','No']

urllink : string= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnbY-fLcMMqyKqZ8kBk9vTtboqfE_mvHAzbyoWvi39-Bz5P0LlBU7_FtB6iFCzGWM6rEo&usqp=CAU';

// image input
onFileChanged(files) {
  this.prepareFilesList(files);
}
prepareFilesList(files: Array<any>) {
  for (const item of files) {
    item.progress = 0;
    this.files.push(item);
  }
  this.uploadFilesSimulator(0);
}
uploadFilesSimulator(index: number) {
  setTimeout(() => {
    if (index === this.files.length) {
      return;
    } else {
      const progressInterval = setInterval(() => {
        if (this.files[index].progress === 100) {
          clearInterval(progressInterval);
          this.uploadFilesSimulator(index + 1);
        } else {
          this.files[index].progress += 5;
        }
      }, 200);
    }
  }, 1000);
}
formatBytes(bytes, decimals) {
  if (bytes === 0) {
    return '0 Bytes';
  }
  const k = 1024;
  const dm = decimals <= 0 ? 0 : decimals || 2;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}



// onSubmit(){
//   this.service.postProduct(this.profileFormGroup.value).subscribe({
//     next:(res)=>{
//       console.log(res);
//       this.notifierService.showNotification('Product Added Succesfully','OK');
//       this.profileFormGroup.reset();
 
//     },
//     error:()=>{
//       alert("error while adding the product");
//     }
//   })
// }

}


