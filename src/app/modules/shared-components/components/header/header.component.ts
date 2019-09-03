import { Component, OnInit, OnDestroy } from '@angular/core';
import { CustomIconService } from '@service/icons/custom-icons.service';
import { MatDialog } from '@angular/material/dialog';
import { BugReportDialogComponent, BugReport } from '../bug-report-dialog/bug-report-dialog.component';
import { GenreService } from '@service/genres/genres.service';
import { Subscription } from 'rxjs';
import { PlatformsService } from '@service/platforms/platforms.service';
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
export class HeaderComponent implements OnInit, OnDestroy {
  public bugReport: BugReport;

  public readonly links: Link[] = [
    { name: 'Home', path: '', icon: 'home' },
    { name: 'Gaming', path: 'gaming', icon: 'games' },
    { name: 'Contact', path: 'contact', icon: 'mail' }
  ];

  private subscriptions: Subscription[] = [];

  public genresMap: Map<string, { id: number; slug: string }>;
  public genres: Array<any> = [];

  public platforms: Platform[];

  constructor(
    private readonly customIconsService: CustomIconService,
    private readonly dialogService: MatDialog,
    private readonly genreService: GenreService,
    private readonly platformService: PlatformsService
  ) {}

  ngOnInit(): void {
    this.customIconsService.registerPlatformIcons();
    this.subscriptions.push(
      this.genreService.getGenres().subscribe(([genreMap, genreArray]) => {
        this.genresMap = genreMap as Map<string, { id: number; slug: string }>;
        this.genres = genreArray as Array<any>;
      })
    );

    this.platforms = this.platformService.getPlatforms();
  }

  public openReportBugDialog(): void {
    const dialogRef = this.dialogService.open(BugReportDialogComponent, {
      width: '500px',
      data: { bug: this.bugReport }
    });

    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((result: any) => {
        console.log('The dialog was closed');
        this.bugReport = result;
      })
    );
  }

  public trackByFunc(index: number, item: Link): string {
    return item.path;
  }

  public ngOnDestroy(): void {
    for (const sub of this.subscriptions) {
      sub.unsubscribe();
    }
  }
}
