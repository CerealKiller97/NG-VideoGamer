import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LoadingService } from '@service/loading/loading.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { GamesService } from '@service/games/games.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private subscription: Subscription;

  constructor(
    private readonly titleService: Title,
    private readonly loadingService: LoadingService,
    private readonly snackBar: MatSnackBar,
    private readonly gamesService: GamesService
  ) {}

  ngOnInit(): void {
    this.loadingService.setLoading(true);
    this.titleService.setTitle('VideoGamer | Home');
    this.openSnackBar();
    this.subscription = this.gamesService.getGames().subscribe(data => {
      console.log(data);
    });
  }

  openSnackBar(): void {
    const options: MatSnackBarConfig = {
      direction: 'ltr',
      duration: 4000,
      horizontalPosition: 'end'
    };

    this.snackBar.open('Welcome 👋', null, options);
  }

  onClick(): void {
    this.openSnackBar();
  }
}
