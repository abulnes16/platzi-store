import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  DoCheck,
  OnDestroy
} from '@angular/core';

import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import { Product } from '../../../product.model';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {

  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  icon = faCartPlus;
  today = new Date();

  constructor(
    private cartService: CartService
  ) {
    console.log('1. constructor');
  }


  ngOnInit() {
    console.log('3. ngOnInit');
  }

  ngDoCheck() {
    console.log('4. ngDoCheck');
  }

  ngOnDestroy() {
    console.log('5. ngOnDestroy');
  }

  addCart() {
    console.log('añadir al carrito');
    this.cartService.addCart(this.product);
    /* this.productClicked.emit(this.product.id); */
  }

}