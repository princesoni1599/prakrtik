import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {
  @Input() public plantmodel : any;
  retrivedImage:any
  constructor(private _sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.retrivedImage=('data:image/jpg;base64,'+this.plantmodel.productImage);
  }

}
