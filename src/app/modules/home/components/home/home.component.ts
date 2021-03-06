import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { Game } from '@model/Game';
import { GamesService } from '@service/games/games.service';
import { LoadingService } from '@service/loading/loading.service';
import { GameComponent } from 'app/modules/gaming/components/game/game.component';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  entryComponents: [GameComponent]
})
export class HomeComponent implements OnInit {
  private subscriptions: Array<Subscription> = new Array<Subscription>();

  public games: Array<any> = new Array<any>();

  constructor(
    private readonly titleService: Title,
    private readonly loadingService: LoadingService,
    private readonly snackBar: MatSnackBar,
    private readonly gamesService: GamesService
  ) {}

  ngOnInit(): void {
    this.loadingService.setLoadingText('Welcome to gaming world.');
    this.loadingService.setLoading(true);
    setTimeout(() => this.loadingService.setLoading(false), 2000);
    this.titleService.setTitle('VideoGamer | Home');
    this.openSnackBar();
    this.subscriptions.push(
      this.gamesService.getRandomGames().subscribe((data: Game[]) => {
        this.games = data;
      })
    );
  }

  openSnackBar(): void {
    const options: MatSnackBarConfig = {
      direction: 'ltr',
      duration: 4000,
      horizontalPosition: 'end',
      panelClass: ['primary']
    };

    this.snackBar.open('Welcome 👋', null, options);
  }

  onClick(): void {
    this.openSnackBar();
  }

  public trackBy(index: number, item: Game): string {
    return item.slug;
  }
}
