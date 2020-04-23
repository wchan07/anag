import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './contracts';

const DATA_URL = 'assets/product.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProduct() {
    return this.http.get<Product>(DATA_URL);
  }
}
