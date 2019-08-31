import { Component, OnInit } from '@angular/core';

export interface Link {
  name: string;
  path: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public readonly links: Link[] = [
    { name: 'Home', path: '' },
    { name: 'Gaming', path: 'gaming' },
    { name: 'Contact', path: 'contact' }
  ];
  constructor() {}

  ngOnInit() {}

  trackByFunc(index: number, item: Link): string {
    return item.path;
  }
}
