import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '@model/Game';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private resourcePath: string = `${environment.apiUrl}/games`;

  private readonly genreMappings = new Map<string, number>([
    ['action', 4],
    ['strategy', 10],
    ['role-playing-games-rpg', 5],
    ['shooter', 2],
    ['adventure', 3],
    ['puzzle', 7],
    ['racing', 1],
    ['sports', 15]
  ]);

  constructor(private readonly http: HttpClient) {}

  public getRandomGames(): Observable<Game[]> {
    return null;
  }

  public getGames(): Observable<Game[]> {
    return this.http.get<{ results: Game[] }>(this.resourcePath).pipe(map(response => response.results));
  }

  public getGame(gameSlug: string): Observable<Game> {
    return this.http.get<Game>(`${this.resourcePath}/${gameSlug}`);
  }

  public getGamesByPlatform(platform: string) {
    this.resourcePath += '?';
    return this.http.get<{ results: Game[] }>(this.resourcePath).pipe(map(response => response.results));
  }

  public getGamesByGenre(genre: string) {
    const genreId: number = this.genreMappings.get(genre);

    return this.http
      .get<{ results: Game[] }>(`${this.resourcePath}?genres=${genreId}`)
      .pipe(map(response => response.results));
  }
}
