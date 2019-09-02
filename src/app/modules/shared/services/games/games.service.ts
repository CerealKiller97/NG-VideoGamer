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
  private readonly resourcePath: string = `${environment.apiUrl}/games`;

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

  public getGamesByPlatform(platform: string) {}

  public getGamesByGenre(genre: string) {}
}
