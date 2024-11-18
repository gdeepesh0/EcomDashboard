import { Component, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent {
  categories: Category[] = []

  constructor(private porductService: ProductService) {
    this.porductService.getCategories().subscribe((categories: Category[]) => {
      this.categories = categories;
    })
  }
  @Output() filterChange = new EventEmitter<any>();

  // Filter states
  category = '';
  minPrice = 0;
  maxPrice = 1000;

  // Sorting state
  sort = 'priceAsc';

  // Apply filters and emit changes
  applyFilters(): void {
    const filters = {
      categoryId: this.category,
      price_min: this.minPrice,
      price_max: this.maxPrice,
      sort: this.sort,
    };
    this.filterChange.emit(filters);
  }
}
