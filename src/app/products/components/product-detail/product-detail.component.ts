import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../../../product.model';

import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string): void {
    this.productsService.getProduct(id).subscribe(product => {
      this.product = product;
    });
  }

  create(): void {
    const newProduct: Product = {
      id: '5',
      title: 'Stickers',
      image: 'assets/images/stickers1.png',
      price: 4500,
      description: 'Stickers Platzi'
    };
    this.productsService.createProduct(newProduct).subscribe(product => console.log(product));
  }

  update(): void {
    const updateProduct: Partial<Product> = {
      image: './assets/images/nike-1.png',
      price: 4000
    };
    this.productsService.updateProduct('12', updateProduct).subscribe(product => console.log(product));
  }

  delete(): void {
    this.productsService.deleteProduct('12').subscribe(res => console.log(res));
  }



}
