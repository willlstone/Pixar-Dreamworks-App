import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudioComponent} from './studio/studio.component';
import {RouterModule, Routes} from '@angular/router';
import {MovieDetailComponent} from './movie-detail/movie-detail.component';
import {BioComponent} from './bio/bio.component';

const routes: Routes = [
  // {path: 'movie/:id', component: MovieDetailComponent },
  {path: 'person/:id', component: BioComponent },
  {path: 'details/:grid/:id', component: MovieDetailComponent },
  {path: ':grid/:id', component: StudioComponent },
  {path: '', pathMatch: 'full', component: StudioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
