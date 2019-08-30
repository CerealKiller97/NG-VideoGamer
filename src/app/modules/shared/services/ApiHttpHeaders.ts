import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

export const apiHttpHeaders = {
  headers: new HttpHeaders({
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'x-rapidapi-host': `${environment.xRapidApiHost}`,
    'x-rapidapi-key': `${environment.xRapidApiKey}`
  })
};
