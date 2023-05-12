import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from '../models/category';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.css']
})
export class CategoryFilterComponent implements OnInit {

  categories !: Category[];
  
  constructor(private gameService : GameService) {
    this.gameService.getCategories()
      .subscribe({
        next: (data : Category[]) => {
          this.categories = data;
        },
        error: err => console.log(err)
      })
  }

  @Output() changed = new EventEmitter<number>();

  ngOnInit(): void {
  }

  onChange(target : any){
    this.changed.emit(parseInt(target.value));
  }

}
