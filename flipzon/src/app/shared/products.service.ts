import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { products } from './products.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
selectedProducts:products;
products:products[];  
readonly baseurl="http://localhost:3000/prodetails";
  constructor( private http:HttpClient) { }
  postProduct(product:products){
return this.http.post(this.baseurl,product);
  }
}

