import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  Items;

  constructor(private productService: ProductsService) {
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(res => {
      this.Items = res;
    })
  }



}
