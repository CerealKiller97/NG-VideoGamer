import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { GamesService } from '@service/games/games.service.ts';
import { switchMap } from 'rxjs/operators';
import { Game } from '@modelGame';
import { GenreService } from '@servicegenres/genres.service';
import { PlatformsService } from '@serviceplatforms/platforms.service';
import { LoadingService } from '@service/loading/loading.service';
@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit, OnDestroy {
  private subscriptions: Array<Subscription> = new Array<Subscription>();
  public games: Game[];
  public category: string;
  public value: string;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly gamingService: GamesService,
    private readonly genreService: GenreService,
    private readonly platformService: PlatformsService,
    private readonly loadingService: LoadingService
  ) {}

  public ngOnInit() {
    this.handleUrl();
  }

  private handleUrl(): void {
    this.subscriptions.push(
      this.route.paramMap
        .pipe(
          switchMap((params: ParamMap) => {
            this.loadingService.setLoading(true);
            this.games = [];
            if (this.router.url.startsWith('/gaming/genres/')) {
              this.category = 'Genre';
              this.value = params.get('genre');
              return this.genreService.getGamesByGenre(params.get('genre'));
            } else if (this.router.url.startsWith('/gaming/platform/')) {
              this.category = 'Platform';
              this.value = params.get('platform');
              return this.platformService.getGamesByPlatform(params.get('platform'));
            }
          })
        )
        .subscribe((games: Game[]) => {
          this.games = games;
          setTimeout(() => this.loadingService.setLoading(false), 1000);
        })
    );
  }

  public ngOnDestroy(): void {
    for (const sub of this.subscriptions) {
      sub.unsubscribe();
    }
  }
}
