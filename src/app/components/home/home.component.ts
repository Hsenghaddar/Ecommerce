import { Component ,Input,ViewChild} from '@angular/core';
import { CardComponent } from "../card/card.component";
import { CategoriesComponent } from "../categories/categories.component";
import { ProductsComponent } from "../products/products.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, CategoriesComponent, ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChild(ProductsComponent) productsComponent!: ProductsComponent;
  item(item:any){
    this.productsComponent.filterProducts(item)
  } 
}
