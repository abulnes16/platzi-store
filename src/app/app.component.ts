import { Component } from '@angular/core';
import { Product } from './product.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzi-store';

  items = ['Angel', 'David', 'Jose'];
  power = 10;

 

  addItem(): void {
    this.items.push('Nuevo item');
  }

  deleteItem(index): void {
    this.items.splice(index, 1);
  }

 
}
