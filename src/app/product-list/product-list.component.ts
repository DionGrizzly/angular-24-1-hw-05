import { Component, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Item } from '../shared/item.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnDestroy { // Добавил имплемент
  @Output() itemAdded = new EventEmitter<any>();

  productList = [
    { name: 'Phone', price: 699 },
    { name: 'Laptop', price: 999 },
  ];

  addToCart(item: Item) { // Добавил типизацию аргумента
    this.itemAdded.emit(item);
  }

  // Нужно удалить, т.к. нет логики в ngOnDestroy
  ngOnDestroy() {
    console.log('ProductListComponent destroyed');
  }
}
