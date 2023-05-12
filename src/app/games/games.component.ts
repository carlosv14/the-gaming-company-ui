import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games !: Array<Game>;
  filteredGames !:Array<Game>;
  selectedGame ?: Game;

  constructor(private gameService : GameService) {
    
  }

  ngOnInit(): void {
    this.gameService.getGames(-1)
      .subscribe({
        next: (data : Game[]) => {
          this.games = data,
          this.filteredGames = this.games;
        },
        error: (err) =>  console.log(err)
      })
  }


  onClick(game : Game){
    this.selectedGame = game;
  }

  filterByCategory(id : number){
    if(id == 0){
      this.filteredGames = this.games;
      return;
    }
    this.filteredGames = this.games.filter((game: Game ) => game.categoryId == id);
  }
}
