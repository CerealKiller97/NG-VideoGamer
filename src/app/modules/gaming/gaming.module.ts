import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { GameListComponent } from './components/game-list/game-list.component';

const routes: Routes = [
  {
    path: 'platform/:platform',
    component: GameListComponent
  },
  {
    path: 'genres/:genre',
    component: GameListComponent
  }
];

@NgModule({
  declarations: [GameComponent, GameListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class GamingModule {}
