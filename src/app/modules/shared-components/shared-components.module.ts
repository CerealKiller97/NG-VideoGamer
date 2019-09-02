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
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoadingSpinnerComponent,
    NotificationComponent,
    HeroComponent,
    BugReportDialogComponent
  ],
  imports: [CommonModule, FingerprintSpinnerModule, RouterModule, MaterialModule, FormsModule, MatInputModule],
  exports: [HeaderComponent, FooterComponent, LoadingSpinnerComponent],
  providers: [CustomIconService],
  entryComponents: [BugReportDialogComponent]
})
export class SharedComponentsModule {}
