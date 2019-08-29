import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { FingerprintSpinnerModule } from 'angular-epic-spinners';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LoadingSpinnerComponent],
  imports: [CommonModule, FingerprintSpinnerModule, RouterModule, MaterialModule],
  exports: [HeaderComponent, FooterComponent, LoadingSpinnerComponent]
})
export class SharedComponentsModule {}
