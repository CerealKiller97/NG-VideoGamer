import { Component, OnInit } from '@angular/core';
import { CustomIconService } from '@service/icons/custom-icons.service';
export interface Link {
  name: string;
  path: string;
  icon: string;
}

export interface Genre {
  name: string;
  icon: string;
  slug: string;
}

export interface Platform {
  name: string;
  icon: string;
  slug: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public readonly links: Link[] = [
    { name: 'Home', path: '', icon: 'home' },
    { name: 'Gaming', path: 'gaming', icon: 'games' },
    { name: 'Contact', path: 'contact', icon: 'mail' }
  ];

  public readonly genres: Genre[] = [
    { name: 'Action', icon: '../../../../../assets/images/genres/action.png', slug: 'action' },
    { name: 'Strategy', icon: '', slug: 'strategy' },
    { name: 'RPG', icon: '', slug: 'role-playing-games-rpg' },
    { name: 'Shooter', icon: '', slug: 'shooter' },
    { name: 'Adventure', icon: '', slug: 'adventure' },
    { name: 'Puzzle', icon: '', slug: 'puzzle' },
    { name: 'Racing', icon: '', slug: 'racing' },
    { name: 'Sports', icon: '', slug: 'sports' }
  ];

  public readonly platforms: Platform[] = [
    { name: 'PC', icon: 'windows', slug: 'pc' },
    { name: 'PlayStation 4', icon: 'ps4', slug: 'playstation4' },
    { name: 'Xbox One', icon: 'xbox', slug: 'xbox-one' },
    { name: 'Nintendo Switch', icon: 'nintendo', slug: 'nintendo-switch' },
    { name: 'iOS', icon: 'ios', slug: 'ios' },
    { name: 'Android', icon: 'android', slug: 'android' }
  ];

  constructor(private readonly customIconsService: CustomIconService) {}

  ngOnInit(): void {
    this.customIconsService.registerPlatformIcons();
  }

  trackByFunc(index: number, item: Link): string {
    return item.path;
  }
}
