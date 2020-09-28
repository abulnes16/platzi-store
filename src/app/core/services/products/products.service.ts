import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../../../product.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[];
  constructor(
    private http: HttpClient
  ) { }

  createProduct(product: Product): any {
    return this.http.post(`${environment.urlAPI}/products`, product);
  }

  getAllProducts(): any {
    return this.http.get<Product[]>(`${environment.urlAPI}/products`);
  }

  getProduct(id: string): any {
    return this.http.get<Product>(`${environment.urlAPI}/products/${id}`);
  }

  updateProduct(id: string, changes: Partial<Product>): any {
    return this.http.put(`${environment.urlAPI}/products/${id}`, changes);
  }

  deleteProduct(id: string): any {
    return this.http.delete(`${environment.urlAPI}/products/${id}`);
  }

}
