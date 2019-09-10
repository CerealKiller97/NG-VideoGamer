import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public shouldBeFixed: boolean;

  constructor(private readonly route: ActivatedRoute, private readonly router: Router) {}

  ngOnInit() {
    let url: string;
    if (this.router.routerState.snapshot.url === '/gaming/contact') {
      this.shouldBeFixed = true;
    } else if (this.router.routerState.snapshot.url === '/contact') {
      this.shouldBeFixed = true;
    }
  }
}
