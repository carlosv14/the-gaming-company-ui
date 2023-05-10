import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from '../models/category';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.css']
})
export class CategoryFilterComponent implements OnInit {

  categories : Category[];
  constructor() {
    this.categories = [
      {id: 0, name: "All"},
      {id: 1, name:"Multi-player"},
      {id: 2, name: "Single-player"}
    ]
  }

  @Output() changed = new EventEmitter<number>();

  ngOnInit(): void {
  }

  onChange(target : any){
    this.changed.emit(parseInt(target.value));
  }

}
