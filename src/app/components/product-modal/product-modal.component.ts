import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss']
})
export class ProductModalComponent implements OnInit {
  @Input() productId!: number;
  @Output() close = new EventEmitter();
  productDetails: Product | null = null;
  isLoading = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    if (this.productId) {
      this.loadProductDetails();
    }
  }

  loadProductDetails(): void {
    this.isLoading = true;
    this.productService.getProductDetails(this.productId).subscribe(
      (data) => {
        this.productDetails = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error loading product details:', error);
        this.isLoading = false;
      }
    );
  }

  closeModal() {
    this.productDetails = null
    this.close.emit(true);
  }
}
