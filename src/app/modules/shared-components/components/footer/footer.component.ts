import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public shouldBeFixed: boolean;

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    this.handleFixedFooter();
  }

  private handleFixedFooter(): void {
    if (this.router.routerState.snapshot.url === '/gaming/contact') {
      this.shouldBeFixed = true;
    } else if (this.router.routerState.snapshot.url === '/contact') {
      this.shouldBeFixed = true;
    } else if (this.router.routerState.snapshot.url.startsWith('/contact/contact')) {
      this.shouldBeFixed = true;
    }
  }
}
