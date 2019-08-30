import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LoadingService } from '@service/loading/loading.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { TeamsService } from '@serviceteams/teams.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private subscription: Subscription;

  constructor(
    private readonly titleService: Title,
    private readonly loadingService: LoadingService,
    private readonly snackBar: MatSnackBar,
    private readonly teamsService: TeamsService
  ) {}

  ngOnInit(): void {
    this.loadingService.setLoading(true);
    this.titleService.setTitle('VideoGamer | Home');
    this.openSnackBar();
    this.subscription = this.teamsService.find(5).subscribe(data => {
      console.log(data);
    });
  }

  openSnackBar(): void {
    const options: MatSnackBarConfig = {
      direction: 'ltr',
      duration: 4000,
      horizontalPosition: 'end',
      panelClass: ['example-pizza-party']
    };

    this.snackBar.open('Welcome to the best NBA analytics app. 👋', 'Dismiss', options);
    // this.snackBar.openFromComponent(NotificationComponent, options);
  }

  onClick(): void {
    this.openSnackBar();
  }
}
