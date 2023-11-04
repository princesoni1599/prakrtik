import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

import { ActivatedRoute, Router } from '@angular/router';
import { PlantModel } from 'src/app/plantmodel';
import { ApiService } from 'src/app/services/api.service';
import { NotifierService } from 'src/app/services/notifier.service';

@Component({
  selector: 'app-updateseeds',
  templateUrl: './updateseeds.component.html',
  styleUrls: ['./updateseeds.component.css']
})
export class UpdateseedsComponent implements OnInit {

 
  @ViewChild('stepper') stepper: MatStepper;
  productObject: PlantModel = new PlantModel();
  profileFormGroup!: FormGroup;
  files: any[] = [];
  
  constructor(private fb:FormBuilder,private service: ApiService,private notifierService: NotifierService,private router:Router,private route:ActivatedRoute ){

  }
  
  ngOnInit(): void {
    this.profileFormGroup= new FormGroup({
    sellerEmailId:new FormControl("",Validators.required),
    //productId:new FormControl(""),
    productsAvailable:new FormControl("",Validators.required),
    productName:new FormControl("",Validators.required),
    productPrice:new FormControl("",Validators.required),
    productAddress:new FormControl("",Validators.required),
    productImage:new FormControl(""),
    productAge:new FormControl(""),
    sizeOfProduct:new FormControl(""),
    waterRequirement:new FormControl("",Validators.required),
    sunlightRequirement:new FormControl("",Validators.required),
    toxicity:new FormControl("",Validators.required),
    description:new FormControl("",Validators.required),
       });


   this.service.getCurrentData(this.route.snapshot.params.id).subscribe((res)=>{
    this.profileFormGroup=new FormGroup({
      sellerEmailId:new FormControl(res['sellerEmailId']),
      productsAvailable:new FormControl(res['productsAvailable']),
      productName:new FormControl(res['productName']),
      productPrice:new FormControl(res['productPrice']),
      productImage:new FormControl(res['productImage']),
      productAddress:new FormControl(res['productAddress']),
      //productAge:new FormControl(res['productAge']),
     // sizeOfProduct:new FormControl(res['sizeOfProduct']),
      waterRequirement:new FormControl(res['waterRequirement']),
      sunlightRequirement:new FormControl(res['sunlightRequirement']),
      toxicity:new FormControl(res['toxicity']),
      description:new FormControl(res['description'])


    })
    
    })
        

  }

  // OnSubmit(){
  //   console.log('formValue', this.profileFormGroup.value);
  //   this.productObject.productName = this.profileFormGroup.value.productName;
  //   this.productObject.productsAvailable = this.profileFormGroup.value.productsAvailable;
  //   this.productObject.productPrice = this.profileFormGroup.value.productPrice;
  //   this.productObject.sellerEmailId= this.profileFormGroup.value.sellerEmailId;
  //   this.productObject.productAddress= this.profileFormGroup.value.productAddress;
  //   this.productObject.productAge= this.profileFormGroup.value.productAge;
  //   this.productObject.sizeOfProduct= this.profileFormGroup.value.sizeOfProduct;
  //   this.productObject.waterRequirement= this.profileFormGroup.value.waterRequirement;
  //   this.productObject.sunlightRequirement= this.profileFormGroup.value.sunlightRequirement;
  //   this.productObject.toxicity= this.profileFormGroup.value.toxicity;
  //   this.productObject.description= this.profileFormGroup.value.description;
  //   this.productObject.productId=this.profileFormGroup.value.productId;

  //   this.service.updatePlantModel(this.productObject, this.files[0]).subscribe((result) => {
  //     console.warn("result is here", result)
  //        this.profileFormGroup.reset();
        
  //        this.router.navigate(['/home']);
  //   })
    
  // }   


  days: string[] = ['Once a week', 'Twice a week', 'Thrice a week', 'Everyday'];

  sunlightRequirement!: string;
  parts:string[]=['Full sun - Plants need at least 6 hours of direct sun daily',
                  'Part sun – Plants thrive with between 3 and 6 hours of direct sun per day',
                  'Part shade – Plants require between 3 and 6 hours of sun per day, but need protection from intense mid-day sun',
                  'Full shade – Plants require less than 3 hours of direct sun per day'];


  sizeOfPlant!: string;
  sizes:string[]=['----']

  toxicity!:string;
  results:string[]=['Yes','No']

  urllink : string= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnbY-fLcMMqyKqZ8kBk9vTtboqfE_mvHAzbyoWvi39-Bz5P0LlBU7_FtB6iFCzGWM6rEo&usqp=CAU';

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


OnSubmit(){
  this.service.putProduct(this.profileFormGroup.value,this.route.snapshot.params.id).subscribe((res=>{
    this.notifierService.showNotification('Product Data Updated succesfully','OK'),
    this.router.navigate(['/home'])
  }))
 
} 


}