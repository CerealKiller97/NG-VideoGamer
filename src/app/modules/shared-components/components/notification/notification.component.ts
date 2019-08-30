import { Component, OnInit, Input } from '@angular/core';

export enum Color {
  SUCCESS = '#00ff00',
  ERROR = 'red',
  WARNING = 'yellow',
  INFO = 'cyan'
}

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  @Input()
  message: string;
  @Input()
  color: string;

  constructor() {}

  ngOnInit() {}
}
