import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavigationComponent } from './navigation/navigation.component';
import { MovieGridComponent } from './movie-grid/movie-grid.component';
import { GridBannerComponent } from './grid-banner/grid-banner.component';
import { AppRoutingModule } from './app-routing.module';
import { StudioComponent } from './studio/studio.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MovieGridComponent,
    GridBannerComponent,
    StudioComponent,
    MovieDetailComponent,
    StudioComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
