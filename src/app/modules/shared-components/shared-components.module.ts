import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { FingerprintSpinnerModule } from 'angular-epic-spinners';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { NotificationComponent } from './components/notification/notification.component';
import { CustomIconService } from '@serviceicons/custom-icons.service';
import { HeroComponent } from './components/hero/hero.component';
import { BugReportDialogComponent } from './components/bug-report-dialog/bug-report-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarContainer, SimpleSnackBar } from '@angular/material/snack-bar';
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
    ReactiveFormsModule
  ],
  exports: [HeaderComponent, FooterComponent, LoadingSpinnerComponent, FormsModule, ReactiveFormsModule],
  providers: [CustomIconService, MatSnackBar],
  entryComponents: [BugReportDialogComponent, MatSnackBarContainer, SimpleSnackBar]
})
export class SharedComponentsModule {}
