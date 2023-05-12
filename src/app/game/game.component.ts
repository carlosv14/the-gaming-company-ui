import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../models/game';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, map } from 'rxjs';
import { GameService } from '../services/game.service';
import { Loan } from '../models/loan';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input() game ?: Game;

  constructor(private route: ActivatedRoute, private gameService : GameService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id  = params.get('id');
      this.gameService.getGameById(id)
        .subscribe({
          next: (data : Game) => this.game = data,
          error: (err) => console.log(err)
        })
    })
  }

  onLoan(){
    if(this.game && this.game.copies > 0){
      this.gameService.loanGame(this.game.id)
        .subscribe({
          next: (data : Loan) => {
            this.gameService.getGameById(String(data.gameId))
              .subscribe({
                next: (data : Game) => this.game = data,
                error: (err) => console.log(err)
              })
          },
          error: (err) => console.log(err)
        });
    }
  }

  onReturn(){
    if(this.game){
      this.gameService.returnGame(this.game.id)
        .subscribe({
          next: (data : Loan) => {
            this.gameService.getGameById(String(data.gameId))
              .subscribe({
                next: (data : Game) => this.game = data,
                error: (err) => console.log(err)
              })
          },
          error: (err) => console.log(err)
        });
    }
  }
}
