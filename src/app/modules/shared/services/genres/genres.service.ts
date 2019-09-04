import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment.prod';
import { pluck, map } from 'rxjs/operators';
import { Genre } from '@shared-components/components/header/header.component';
import { Game } from '@modelGame';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  private resourcePath = `${environment.apiUrl}/games`;
  private genres: Genre[];
  private readonly genreMappings = new Map<string, number>([
    ['action', 4],
    ['strategy', 10],
    ['role-playing-games-rpg', 5],
    ['shooter', 2],
    ['adventure', 3],
    ['puzzle', 7],
    ['racing', 1],
    ['sports', 15],
    ['indie', 51]
  ]);

  public constructor(private readonly http: HttpClient) {}

  public getGenres() {
    return this.http.get(`${environment.apiUrl}/genres`).pipe(
      pluck('results'),
      map((results: Array<any>) => {
        const genresMap = new Map<string, { id: number; slug: string }>();
        const genresArray = new Array(6);
        let counter = 0;

        for (const result of results) {
          if (counter > 5) {
            break;
          }
          genresArray[counter] = { name: result.name, slug: result.slug };
          genresMap.set(result.name, { id: result.id, slug: result.slug });
          counter++;
        }

        return [genresMap, genresArray];
      })
    );
  }

  public getGamesByGenre(genre: string) {
    const genreId: number = this.genreMappings.get(genre);

    return this.http
      .get<{ results: Game[] }>(`${this.resourcePath}?genres=${genreId}`)
      .pipe(map(response => response.results));
  }
}
