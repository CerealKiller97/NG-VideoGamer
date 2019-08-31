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
    path: 'gaming',
    component: DefaultComponent,
    loadChildren: () => import('../../gaming/gaming.module').then(mod => mod.GamingModule)
  },
  {
    path: 'contact',
    component: DefaultComponent,
    loadChildren: () => import('../../contact/contact.module').then(mod => mod.ContactModule)
  },
  {
    path: '**',
    component: DefaultComponent,
    loadChildren: () => import('../../errors/errors.module').then(mod => mod.ErrorsModule)
  }
];

@NgModule({
  declarations: [DefaultComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedComponentsModule]
})
export class VideoGamerLayoutModule {}
