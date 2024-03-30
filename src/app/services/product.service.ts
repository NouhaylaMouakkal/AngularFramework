import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  public getProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>('http://localhost:8089/products') as Observable<any>;
  }

  public checkProduct(product: Product): Observable<any> {
    return this.http.patch<Product>(`http://localhost:8089/products/${product.id}`, { checked: !product.checked }) as Observable<any>;
  }

  public deleteProduct(product: Product){
    return this.http.delete<any>(`http://localhost:8089/products/${product.id}`);
  }
  public saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`http://localhost:8089/products`, product) as Observable<any>;
  }
}
