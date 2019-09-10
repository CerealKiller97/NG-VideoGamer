import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Game } from '@model/Game';
import { GamesService } from '@service/games/games.service';
import { CustomIconService } from '@service/icons/custom-icons.service';
import { LoadingService } from '@service/loading/loading.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game-profile',
  templateUrl: './game-profile.component.html',
  styleUrls: ['./game-profile.component.css']
})
export class GameProfileComponent implements OnInit, OnDestroy {
  private subscriptions: Array<Subscription> = new Array<Subscription>();
  private gameSlug: string;
  public game: Game = null;
  public platforms: string[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly gamingService: GamesService,
    private readonly titleService: Title,
    private readonly customIconsService: CustomIconService,
    private readonly loadingService: LoadingService
  ) {}

  public ngOnInit(): void {
    this.loadingService.setLoading(true);
    this.customIconsService.registerPlatformIcons();
    this.getGameSlug();
    this.subscriptions.push(
      this.gamingService.getGame(this.gameSlug).subscribe((game: Game) => {
        this.game = game;
        this.titleService.setTitle(`VideoGamer | ${this.game.name}`);
        setTimeout(() => this.loadingService.setLoading(false), 1500);
        this.mapPlatforms(game);
      })
    );
  }

  private getGameSlug(): void {
    this.subscriptions.push(
      this.route.paramMap.subscribe((param: ParamMap) => {
        this.gameSlug = param.get('game');
      })
    );
  }

  public ngOnDestroy(): void {
    for (const sub of this.subscriptions) {
      sub.unsubscribe();
    }
  }

  public genereateColorForMetrics(metacritic: number): string {
    if (metacritic !== null) {
      if (metacritic >= 90) {
        return 'warn';
      }

      if (metacritic < 90) {
        return 'primary';
      }

      if (metacritic < 80) {
        return 'accent';
      }
    }
  }

  public mapPlatform(slug: string): string {
    switch (slug) {
      case 'linux':
        return 'linux';
      case 'pc':
        return 'windows';

      case 'mac':
        return 'ios';

      case 'android':
        return 'android';

      case 'xbox-old':
        return 'xbox';

      case 'nintendo-switch':
        return 'nintendo';

      case 'xbox':
        return 'xbox';

      case 'playstation':
        return 'ps3';

      case 'playstation4':
        return 'ps4';

      default:
        break;
    }
  }

  public mapPlatforms(game: Game): void {
    for (const game of this.game.platforms) {
      switch (game.platform.slug) {
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
