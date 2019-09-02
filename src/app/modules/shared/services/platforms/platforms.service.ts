import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@shared-components/components/header/header.component';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlatformsService {
  private readonly platforms: Platform[] = [
    { name: 'PC', icon: 'windows', slug: 'pc' },
    { name: 'PlayStation 4', icon: 'ps4', slug: 'playstation4' },
    { name: 'Xbox One', icon: 'xbox', slug: 'xbox-one' },
    { name: 'Nintendo Switch', icon: 'nintendo', slug: 'nintendo-switch' },
    { name: 'iOS', icon: 'ios', slug: 'ios' },
    { name: 'Android', icon: 'android', slug: 'android' }
  ];

  private readonly platformMapping = new Map<string, number>([
    ['pc', null],
    ['playstation4', null],
    ['xbox-one', null],
    ['nintendo-switch', null],
    ['ios', null],
    ['android', null]
  ]);

  constructor(private readonly http: HttpClient) {}

  public getPlatforms() {
    return this.platforms;
  }

  public getGamesByPlatform(platform: string) {
    return this.http.get(environment.apiUrl);
  }
}
