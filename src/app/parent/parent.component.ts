import { Component } from '@angular/core';
import { Item } from '../shared/item.interface';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  cart: Item[] = []; // Добавил указание типа массива

  onItemAdded(item: Item) { // Добавил типизацию аргумента
    this.cart.push(item);
    console.log('Cart updated:', this.cart);
  }
}
