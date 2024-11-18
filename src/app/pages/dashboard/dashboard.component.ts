import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  selectedProductId: number | null = null;
  products: Product[] = [];
  filters = { category: '', priceRange: [0, 1000], sort: 'name' };
  page = 1;
  isLoading = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.isLoading = true;
    const params = { ...this.filters, page: this.page };
    this.productService.getProducts(params).subscribe((data) => {
      this.products = [...this.products, ...data];
      console.log(this.products)
      this.isLoading = false;
    });
  }

  onScroll(): void {
    this.page++;
    this.loadProducts();
  }

  applyFilters(filters: any): void {
    this.page = 1;
    this.products = [];
    this.filters = filters;
    this.loadProducts();
  }

  openProductModal(productId: number): void {
    this.selectedProductId = productId;
  }

  closeProductModal(): void {
    this.selectedProductId = null;
  }
}
