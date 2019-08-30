import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Team } from '@model/Team';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IApiResource } from '@serviceIApiResource';
import { HttpClient } from '@angular/common/http';
import { apiHttpHeaders } from '@service/ApiHttpHeaders';
@Injectable({
  providedIn: 'root'
})
export class TeamsService implements  IApiResource<Team> {
  public readonly resourcePath: string = `${environment.apiUrl}/teams`;

  constructor(private readonly http: HttpClient) {}

  public all(): Observable<Team[]> {
    return this.http.get<{ data: Team[] }>(this.resourcePath, apiHttpHeaders).pipe(
        map(response => {
          return response.data;
        })
      );
    }

    public find(id: number): Observable<Team> {
      return this.http.get<Team>(`${this.resourcePath}/${id}`, apiHttpHeaders);
    }
}
