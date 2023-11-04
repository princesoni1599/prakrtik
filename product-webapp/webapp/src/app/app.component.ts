import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {    
  title = 'Learnzilla';

  sellerData:any;
  @Input() childMessage: Object;
  parentUpdate(sellerData:any)
  {
    this.sellerData=sellerData;
    console.warn(sellerData);
  }
}
