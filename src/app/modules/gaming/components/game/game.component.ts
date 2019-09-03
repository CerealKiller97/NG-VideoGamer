import { Component, OnInit, Input } from '@angular/core';
import { Game } from '@model/Game';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Input()
  game: Game;

  constructor(private readonly matSnack: MatSnackBar) {}
  ngOnInit(): void {}

  public addToWishList(): void {
    const options: MatSnackBarConfig = {
      direction: 'ltr',
      duration: 4000,
      horizontalPosition: 'end',
      panelClass: ['success']
    };
    this.matSnack.open('Successfully added to your wishlist', null, options);
  }

  public imageToVideoReplace(game: Game) {
    console.log(game);
  }
}
