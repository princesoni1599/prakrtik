import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private url: string = "http://localhost:8004/user/create_order";
  constructor(private http: HttpClient) { }
  saveUser(data:any) {
    console.log(JSON.stringify(data));
    return this.http.post(this.url,JSON.stringify(data));
  }
}
