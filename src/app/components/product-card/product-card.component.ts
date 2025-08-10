import { Component,Input } from '@angular/core';
import { AddToCartBtnComponent } from "../add-to-cart-btn/add-to-cart-btn.component";
import { ItemsService } from '../../services/items.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [AddToCartBtnComponent,RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() item!:any
  temp!:number
  constructor(private service:ItemsService){}
  add(item: any): void {
    this.service.getcart().subscribe((items)=>{
      const existingItem = items.find((itm: any) => itm.id === item.id);
      if(!existingItem){
        const updatedItem={
          ...item,
          quantity:1
        }
        this.service.addcart(updatedItem).subscribe()
      }else{
        items.forEach((itm:any)=>{
          if(itm.id==item.id){
           itm.quantity+=1
            this.service.updateCart(itm).subscribe()
          }
        })
     }
    })
    
  }
}
