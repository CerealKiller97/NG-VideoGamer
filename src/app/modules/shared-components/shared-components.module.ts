import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarContainer, SimpleSnackBar } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { CustomIconService } from '@serviceicons/custom-icons.service';
import { FingerprintSpinnerModule, SemipolarSpinnerModule } from 'angular-epic-spinners';
import { HeaderComponent } from './components';
import { BugReportDialogComponent } from './components/bug-report-dialog/bug-report-dialog.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { NotificationComponent } from './components/notification/notification.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoadingSpinnerComponent,
    NotificationComponent,
    HeroComponent,
    BugReportDialogComponent
  ],
  imports: [
    CommonModule,
    FingerprintSpinnerModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    SemipolarSpinnerModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoadingSpinnerComponent,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  providers: [CustomIconService, MatSnackBar],
  entryComponents: [BugReportDialogComponent, MatSnackBarContainer, SimpleSnackBar]
})
export class SharedComponentsModule {}
