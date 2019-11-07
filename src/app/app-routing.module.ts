import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudioComponent} from './studio/studio.component';
import {RouterModule, Routes} from '@angular/router';
import {MovieDetailComponent} from './movie-detail/movie-detail.component';

const routes: Routes = [
  {path: ':grid/:id', component: StudioComponent },
  {path: '', pathMatch: 'full', component: StudioComponent},
  {path: 'movie/:id', component: MovieDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
