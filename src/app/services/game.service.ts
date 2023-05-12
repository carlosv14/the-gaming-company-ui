import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../models/game';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';
import { Loan } from '../models/loan';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private httpClient : HttpClient) { }

  getGames(id : number) : Observable<Game[]>{
    return this.httpClient.get<Game[]>(`${environment.baseApiUrl}/Categories/${id}/games`);
  }

  getCategories() : Observable<Category[]>{
    return this.httpClient.get<Category[]>(`${environment.baseApiUrl}/Categories`);
  }

  getGameById(id : string | null) : Observable<Game>{
    return this.httpClient.get<Game>(`${environment.baseApiUrl}/VideoGames/${id}`);
  }

  loanGame(id : number) : Observable<Loan>{
    return this.httpClient.post<Loan>(`${environment.baseApiUrl}/VideoGames/${id}/loans`, null);
  }

  returnGame(gameId : number) : Observable<Loan>{
    return this.httpClient.delete<Loan>(`${environment.baseApiUrl}/VideoGames/${gameId}/loans`);
  }
}
