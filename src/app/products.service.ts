import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  private serverURL = `https://jsonplaceholder.typicode.com/`;

  constructor(private http: HttpClient) {
  }

  id = {};

  getProducts() {
    return this.http.get(this.serverURL + 'photos');
  }

  getProduct(id: number){
    return this.http.get(this.serverURL + 'photos/'  + id);
  }
}
