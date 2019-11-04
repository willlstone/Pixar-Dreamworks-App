import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavigationComponent } from './navigation/navigation.component';
import { MovieGridComponent } from './movie-grid/movie-grid.component';
import { GridBannerComponent } from './grid-banner/grid-banner.component';
import { AppRoutingModule } from './app-routing.module';
import { StudioComponent } from './studio/studio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MovieGridComponent,
    GridBannerComponent,
    StudioComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
