import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '../../shared-components/shared-components.module';
import { DefaultComponent } from './comoponents';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    loadChildren: () => import('../../home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'contact',
    component: DefaultComponent,
    loadChildren: () => import('../../contact/contact.module').then(mod => mod.ContactModule)
  },
  {
    path: '**',
    component: null
  }
];

@NgModule({
  declarations: [DefaultComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedComponentsModule]
})
export class VideoGamerLayoutModule {}
