import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GamesService } from '@service/games/games.service';
import { Subscription } from 'rxjs';
import { Game } from '@model/Game';
import { Title } from '@angular/platform-browser';
import { CustomIconService } from '@service/icons/custom-icons.service';

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
    private readonly route: ActivatedRoute,
    private readonly gamingService: GamesService,
    private readonly titleService: Title,
    private readonly customIconsService: CustomIconService
  ) {}

  public ngOnInit(): void {
    this.customIconsService.registerPlatformIcons();
    this.getGameSlug();
    this.subscriptions.push(
      this.gamingService.getGame(this.gameSlug).subscribe((game: Game) => {
        this.titleService.setTitle(`VideoGamer | ${this.game.name}`);
        this.game = game;
        console.log(game);
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
}
