import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(private http: HttpClient) {
  }

  id = {};

  getProducts() {
    return this.http.get("https://jsonplaceholder.typicode.com/photos");
  }

  getProduct(id: number){
    return this.http.get(`https://jsonplaceholder.typicode.com/photos/${id}`);
  }
}
