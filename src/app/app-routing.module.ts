import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoGamerLayoutModule } from './modules/layouts/video-gamer-layout/video-gamer-layout.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => VideoGamerLayoutModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
