import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IApiResource } from '@service/IApiResource';
import { Game } from '@model/Game';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { apiHttpHeaders } from '@serviceApiHttpHeaders';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GamesService implements IApiResource<Game> {
  public readonly resourcePath: string = `${environment.apiUrl}/games`;

  constructor(private readonly http: HttpClient) {}

  public all(): Observable<Game[]> {
    return this.http.get<{ data: Game[] }>(this.resourcePath, apiHttpHeaders).pipe(
      map(response => {
        return response.data;
      })
    );
  }

  public find(id: number): Observable<Game> {
    return this.http.get<Game>(`${this.resourcePath}/${id}`, apiHttpHeaders);
  }
}
