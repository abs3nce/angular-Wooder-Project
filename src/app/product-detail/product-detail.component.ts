import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
 item;
  constructor(private  productservice: ProductsService) { }

  ngOnInit() {
    this.productservice.getProduct(1).subscribe(Response=>{
      this.item=Response;
      console.log(this.item);
    });
  }

}
