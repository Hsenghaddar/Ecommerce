import { Component, OnInit,Output } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';
import { ItemsService } from '../../services/items.service';
@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CardComponent,CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
  categories=[]
  @Output() itemSelected = new EventEmitter();
  constructor(private service:ItemsService){}
  cat(item:any){
    this.itemSelected.emit(item.id)
  }
  ngOnInit(): void {
    this.service.getCat().subscribe((categories)=>this.categories=categories)
  }
}
