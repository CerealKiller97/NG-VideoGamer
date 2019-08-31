import { Component, OnInit } from '@angular/core';

export interface Link {
  name: string;
  path: string;
  icon: string;
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
  constructor() {}

  ngOnInit() {}

  trackByFunc(index: number, item: Link): string {
    return item.path;
  }
}
