import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  constructor(private service:ApiService,private httpClient: HttpClient) { }
  cards: any[];

  ngOnInit(): void {
    this.service.getProduct().subscribe({next:(result)=>this.cards=result});
  }

  login()
  {
    window.location.href = "https://www.example.com";
  }

  register()
  {
    window.location.href = "https://www.example.com";
  }

}
