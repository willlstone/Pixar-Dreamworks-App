import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudioComponent} from './studio/studio.component';
import {RouterModule, Routes} from '@angular/router';
import {MovieDetailComponent} from './movie-detail/movie-detail.component';
import {BioComponent} from './bio/bio.component';

const routes: Routes = [
  {path: 'studio/:id', component: StudioComponent },
  {path: '', pathMatch: 'full', component: StudioComponent},
  {path: 'movie/:id', component: MovieDetailComponent },
  {path: 'person/:id', component: BioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
