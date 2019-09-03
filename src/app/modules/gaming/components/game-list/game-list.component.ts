import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { GamesService } from '@service/games/games.service.ts';
import { switchMap } from 'rxjs/operators';
import { Game } from '@modelGame';
@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit, OnDestroy {
  private subscriptions: Array<Subscription> = new Array<Subscription>();
  public games: Game[];
  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly gamingService: GamesService
  ) {}

  public ngOnInit() {
    this.handleUrl();
  }

  private handleUrl(): void {
    this.subscriptions.push(
      this.route.paramMap
        .pipe(
          switchMap((params: ParamMap) => {
            if (this.router.url.startsWith('/gaming/genres/')) {
              return this.gamingService.getGamesByGenre(params.get('genre'));
            } else if (this.router.url.startsWith('/gaming/platform/')) {
              return this.gamingService.getGamesByPlatform(params.get('platform'));
            }
          })
        )
        .subscribe((data: Game[]) => console.log(data))
    );
  }

  public ngOnDestroy(): void {
    for (const sub of this.subscriptions) {
      sub.unsubscribe();
    }
  }
}
