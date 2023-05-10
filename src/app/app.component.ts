import { Component, OnInit } from '@angular/core';
import { Game } from './models/game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'the gaming company';
  games !: Array<Game>;
  filteredGames !:Array<Game>;
  selectedGame ?: Game;

  ngOnInit(): void {
    this.games = [
      {name: "Halo", publishedOn: new Date(), author: "Microsoft", mode: { id: 1, name:"Multi-player"}, copies: 2},
      {name: "Halo 1", publishedOn: new Date(), author: "Microsoft", mode: { id: 1, name:"Multi-player"}, copies: 2},
      {name: "Halo 2", publishedOn: new Date(), author: "Microsoft", mode: { id: 1, name:"Multi-player"}, copies: 2},
      {name: "Halo 3", publishedOn: new Date(), author: "Microsoft", mode: { id: 2, name:"Single-player"}, copies: 2},
      {name: "Halo 4", publishedOn: new Date(), author: "Microsoft", mode: { id: 2, name:"Single-player"}, copies: 2},
    ]

    this.filteredGames = this.games;
  }

  onClick(game : Game){
    this.selectedGame = game;
  }

  filterByCategory(id : number){
    if(id == 0){
      this.filteredGames = this.games;
      return;
    }
    this.filteredGames = this.games.filter((game: Game ) => game.mode.id == id);
  }
}
