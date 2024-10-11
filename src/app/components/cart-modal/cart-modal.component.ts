import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'app-cart-modal',
  standalone: true,
  imports: [CartComponent],
  templateUrl: './cart-modal.component.html'
})
export class CartModalComponent {

  @Input() items: CartItem[] =[];

 // @Input() total =0;

  @Output() idProductEventEmiter=new EventEmitter();

  @Output() closeEventEmitter =new EventEmitter();

  onDeleteCart(id:number){
    this.idProductEventEmiter.emit(id);

  }

  closeCart():void {
    this.closeEventEmitter.emit();

  }

}
