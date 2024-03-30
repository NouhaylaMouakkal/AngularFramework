import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'] // Changed styleUrl to styleUrls
})
export class ProductsComponent implements OnInit {
  public products: Array<Product>=[] ;
  public  keyword: string = '';
  constructor(private productService:ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts(1,3).subscribe({
      next: data => {
        this.products = data;
      },
      error: error => {
        console.error('There was an error!', error);
      }
    });
      // this.products$ = this.productService.getProducts();
  }

  handleCheckedProduct(product: Product) {
    this.productService.checkProduct(product).subscribe({
      next: updatedProduct => {
        product.checked = !product.checked;
        // this.getProducts();
    }
    });
  }

  handleDelete(product: Product) {
    if(confirm('Are you sure you want to delete this product?'))
    this.productService.deleteProduct(product).subscribe({
      next: value => {
        // this.getProducts();
        this.products = this.products.filter(p => p.id !== product.id);
      }
    });
  }

  searchProducts() {  
    this.productService.searchProducts(this.keyword).subscribe({
      next: data => {
        this.products = data;
      }
    });
  }
}
