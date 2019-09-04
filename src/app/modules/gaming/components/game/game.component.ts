import { Component, OnInit, Input } from '@angular/core';
import { Game } from '@model/Game';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { LoadingSpinnerComponent } from '@shared-components/components/loading-spinner/loading-spinner.component';
import { CustomIconService } from '@service/icons/custom-icons.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  entryComponents: [LoadingSpinnerComponent]
})
export class GameComponent implements OnInit {
  @Input()
  public game: Game;

  public hovered: boolean;
  public platforms: string[] = [];

  constructor(private readonly matSnack: MatSnackBar, private readonly customIconsService: CustomIconService) {}

  public ngOnInit(): void {
    this.customIconsService.registerPlatformIcons();
    this.mapGenres(this.game);
    this.genereateColorForMetrics(this.game);
    this.mapPlatforms(this.game);
  }

  public addToWishList(gameName: string): void {
    const options: MatSnackBarConfig = {
      direction: 'ltr',
      duration: 4000,
      horizontalPosition: 'end',
      panelClass: ['success']
    };

    this.matSnack.open(`Successfully added ${gameName} your wishlist`, null, options);
  }

  public imageToVideoReplace(game: Game) {
    console.log(game);
  }

  public mapGenres(game: Game): string {
    return game.genres.map(genre => genre.name).join(', ');
  }

  public genereateColorForMetrics(game: Game): string {
    if (game.metacritic !== null) {
      if (game.metacritic >= 90) {
        return 'warn';
      }

      if (game.metacritic < 90) {
        return 'primary';
      }

      if (game.metacritic < 80) {
        return 'accent';
      }
    }

    return null;
  }

  public mapPlatforms(game: Game): void {
    for (const x of game.platforms) {
      switch (x.platform.slug) {
        case 'linux':
          break;
        case 'pc':
          this.platforms = [...this.platforms, 'windows'];
          break;
        case 'macos':
          this.platforms = [...this.platforms, 'ios'];
          break;
        case 'xbox-old':
          this.platforms = [...this.platforms, 'xbox'];
          break;
        case 'nintendo-switch':
          this.platforms = [...this.platforms, 'nintendo'];
          break;
        case 'xbox360':
          this.platforms = [...this.platforms, 'xbox'];
          break;

        case 'playstation3':
          this.platforms = [...this.platforms, 'ps3'];
          break;
        case 'playstation4':
          this.platforms = [...this.platforms, 'ps4'];
          break;
        default:
          break;
      }
    }
  }
}
