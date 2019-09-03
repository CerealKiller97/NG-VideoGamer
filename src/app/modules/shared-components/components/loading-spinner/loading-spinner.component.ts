import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { LoadingService } from '@service/loading/loading.service';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit, OnDestroy {
  @Input()
  public loading: boolean;

  constructor(private readonly loadingService: LoadingService) {}

  public ngOnInit() {
    this.loadingService.subscribe((val: boolean) => {
      this.loading = val;
    });
  }

  public ngOnDestroy(): void {
    this.loadingService.unsubsribe();
  }
}
