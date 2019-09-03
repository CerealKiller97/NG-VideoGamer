import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from '@service/games/games.service';
import { Subscription } from 'rxjs';
import { Game } from '@model/Game';

@Component({
  selector: 'app-game-profile',
  templateUrl: './game-profile.component.html',
  styleUrls: ['./game-profile.component.css']
})
export class GameProfileComponent implements OnInit, OnDestroy {
  private subscriptions: Array<Subscription> = new Array<Subscription>();
  private gameSlug: string;
  public game: Game;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly gamingService: GamesService
  ) {}

  public ngOnInit(): void {
    this.getGameSlug();
    this.subscriptions.push(
      this.gamingService.getGame(this.gameSlug).subscribe((game: Game) => {
        console.log(game);
      })
    );
  }

  private getGameSlug(): void {
    this.subscriptions.push(
      this.route.paramMap.subscribe(param => {
        this.gameSlug = param.get('game');
      })
    );
  }

  public ngOnDestroy(): void {
    for (const sub of this.subscriptions) {
      sub.unsubscribe();
    }
  }
}
