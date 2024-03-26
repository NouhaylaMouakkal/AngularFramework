import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'] // Changed styleUrl to styleUrls
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:8089/products')
      .subscribe(
        (data: any[]) => {
          this.products = data;
        },
        (err: any) => {
          console.error('There was an error!', err);
        }
      );
  }

  handleCheckedProduct(product: any) {
    product.checked = !product.checked;
  }
}
