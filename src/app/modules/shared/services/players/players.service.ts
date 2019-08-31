import { Injectable } from '@angular/core';
import { IApiResource } from '@serviceIApiResource';
import { Player } from '@model/Player';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiHttpHeaders } from '@serviceApiHttpHeaders';
import { map } from 'rxjs/operators';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  public readonly resourcePath: string = `${environment.apiUrl}/players`;

  constructor(private readonly http: HttpClient) {}

  public all(): Observable<Player[]> {
    return this.http.get<{ data: Player[] }>(this.resourcePath, apiHttpHeaders).pipe(map(response => response.data));
  }

  public find(id: number): Observable<Player> {
    return this.http.get<Player>(`${this.resourcePath}/${id}`, apiHttpHeaders);
  }
}
