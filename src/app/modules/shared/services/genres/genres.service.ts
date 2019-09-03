import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment.prod';
import { pluck, take, map } from 'rxjs/operators';
import { Genre } from '@shared-components/components/header/header.component';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  private genres: Genre[];

  public constructor(private readonly httpClient: HttpClient) {}

  public getGenres() {
    return this.httpClient.get(`${environment.apiUrl}/genres`).pipe(
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

  public getGamesByGenre(id: number) {}
}
