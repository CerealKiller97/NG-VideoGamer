import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Game } from '@model/Game';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private readonly resourcePath: string = `${environment.apiUrl}/games`;
  private readonly perPage: string = '?page_size=';
  private readonly page: string = '?page=';

  constructor(private readonly http: HttpClient) {}

  public getRandomGames(): Observable<Game[]> {
    const randomPage: number = Math.floor(Math.random() * 5 + 1);

    return this.http
      .get<{ results: Game[] }>(`${this.resourcePath}?page=${randomPage}&page_size=6`)
      .pipe(map(response => response.results));
  }

  public getGame(gameSlug: string): Observable<Game> {
    return this.http.get<Game>(`${this.resourcePath}/${gameSlug}`);
  }

  public getGamesByPlatform(platform: string) {
    const x = 1;
    return this.http.get<{ results: Game[] }>(this.resourcePath).pipe(map(response => response.results));
  }
}
