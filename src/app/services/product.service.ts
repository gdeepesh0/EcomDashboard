import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category, Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private apiUrl = 'https://api.escuelajs.co/api/v1'; // Replace with real 
  constructor(private http: HttpClient) { }

  getProducts(params: any): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`, { params });
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/categories`);
  }

  getProductDetails(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${productId}`);
  }
}
