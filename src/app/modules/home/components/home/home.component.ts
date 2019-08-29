import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LoadingService } from 'src/app/modules/shared/loading.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private readonly titleService: Title, private readonly loadingService: LoadingService) {}

  ngOnInit() {
    this.loadingService.setLoading(true);
    this.titleService.setTitle('VideoGamer | Home');
  }
}
