import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudioComponent} from './studio/studio.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'studio/:id', component: StudioComponent },
  {path: '', pathMatch: 'full', component: StudioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
