import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { GameComponent } from './game/game.component';
import { CategoryFilterComponent } from './category-filter/category-filter.component';
import { HttpClientModule } from '@angular/common/http';
import { GamesComponent } from './games/games.component';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    CategoryFilterComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
