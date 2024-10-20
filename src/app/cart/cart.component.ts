import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Item } from '../shared/item.interface';

@Component({
  selector: 'app-cart',
  template: `
    <h2>Your Cart</h2>
    <div *ngIf="cartItems.length > 0; else emptyCart">
      <ul>
        <li *ngFor="let item of cartItems">
          {{ item.name }} - {{ item.price }} $
        </li>
      </ul>
    </div>
    <ng-template #emptyCart>
      <p>The cart is empty.</p>
    </ng-template>
  `,
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnChanges { // Добавил имплементы
  @Input() cartItems: Item[] = []; // Добавил указание типа массива

  // Нужно удалить, т.к. нет логики в ngOnInit и ngOnChanges
  ngOnInit() {
    console.log('CartComponent initialized');
    // Логіка для ініціалізації, якщо потрібно.
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['cartItems']) { // Я так понимаю, что к cartItems надо обращаться как к полю cartItems объекта changes
      console.log('Cart items updated:', this.cartItems);
    }
  }
}
