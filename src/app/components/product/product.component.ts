import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input()
  product: Product = {
    id: '',
    title: '',
    price: 0,
    description: '',
    category: {
      id: 0,
      name: '',
    },
    images: [],
  };
  @Output() addedProduct = new EventEmitter<Product>();

  constructor() {}

  onAddToCart() {
    this.addedProduct.emit(this.product);
  }
}
