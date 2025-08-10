import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsService } from '../../services/items.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cart:any=[]
  quantity!:number
  constructor(private service:ItemsService){}
  onValueChange(newValue: string,item:any): void {
    item.quantity=Number(newValue)
    this.service.updateCart(item).subscribe()
  }
  deleteItem(item:any){
    this.service.deleteCart(item).subscribe(()=>this.service.getcart().subscribe((items)=>this.cart=items))
  }
  clear(){
    this.cart.forEach((item:any)=>{
      this.service.deleteCart(item).subscribe(()=>this.cart=[])
    })
  }
  save(){
    this.clear()
  }
  ngOnInit(): void {
    this.service.getcart().subscribe((items)=>this.cart=items)
  }
  
}
