import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent implements OnInit {
  constructor(private readonly router: Router) {}

  ngOnInit() {}

  public goBack(): void {
    this.router.navigate(['']);
  }
}
