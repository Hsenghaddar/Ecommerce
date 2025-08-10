import { Component, OnInit ,Input} from '@angular/core';
import { ProductCardComponent } from "../product-card/product-card.component";
import { CommonModule } from '@angular/common';
import { ItemsService } from '../../services/items.service';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent,CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products:any=[ ]
  allProducts:any=[]
  constructor(private service:ItemsService){}
  filterProducts(item:number){
    this.products = this.allProducts.filter(
      (product: { category: any; }) =>String(product.category).toLowerCase() ===String(item).toLowerCase()
    );
  }  
  ngOnInit(): void {
    this.service.getpro().subscribe((products)=>this.products=products)
    this.service.getpro().subscribe((products)=>this.allProducts=products)
  }
}

