import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@shared-components/components/header/header.component';
import { environment } from 'environments/environment';
import { Game } from '@model/Game';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlatformsService {
  private readonly url = 'https://rawg.io/api/games';
  private readonly platforms: Platform[] = [
    { name: 'PC', icon: 'windows', slug: 'pc' },
    { name: 'PlayStation 4', icon: 'ps4', slug: 'playstation4' },
    { name: 'Xbox One', icon: 'xbox', slug: 'xbox-one' },
    { name: 'Nintendo Switch', icon: 'nintendo', slug: 'nintendo-switch' },
    { name: 'iOS', icon: 'ios', slug: 'ios' },
    { name: 'Android', icon: 'android', slug: 'android' }
  ];

  private readonly platformMapping = new Map<string, number>([
    ['pc', 1], // parent_platforms
    ['playstation4', 1], // platforms
    ['xbox-one', 1], // platforms
    ['nintendo-switch', 7], // platforms
    ['ios', 4], // parent_platforms
    ['android', 8] // parent_platforms
  ]);

  constructor(private readonly http: HttpClient) {}

  public getPlatforms() {
    return this.platforms;
  }

  public getGamesByPlatform(platform: string): Observable<Game[]> {
    let param = 'platforms';
    let platformId: number;
    if (platform === 'pc' || platform === 'ios' || platform === 'android') {
      platformId = this.platformMapping.get(platform);
      param = 'parent_platforms';
    }
    platformId = this.platformMapping.get(platform);

    return this.http
      .get<{ results: Game[] }>(
        `https://cors-anywhere.herokuapp.com/${this.url}/?${param}=${platformId}&page=${platformId}&page_size=20`
      )
      .pipe(map(response => response.results));
  }
}
// https://rawg.io/api/games?parent_platforms=8&page=1&page_size=20&filter=true&comments=true
