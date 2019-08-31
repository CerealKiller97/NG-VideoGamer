import { Observable } from 'rxjs';

export interface IApiResource<T = any> {
  readonly resourcePath: string;
  all(): Observable<T[]>;
  find(id: string): Observable<T>;
}
