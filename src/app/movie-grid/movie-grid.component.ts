import { Component, OnInit } from '@angular/core';
import { TmdbService} from '../tmdb.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-grid',
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.scss']
})
export class MovieGridComponent implements OnInit {
  moviesList = [];
  studio = this.route.snapshot.paramMap.get('id');
  constructor(
    private tmdbService: TmdbService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    // this.tmdbService.getMovies();
    this.getStudioMovieList();
  }
  getList(): void {
    /* tslint:disable:no-string-literal */
    this.tmdbService.getList()
      .subscribe(
        (response) => {
          this.moviesList = response['results'];
        }
      );
  }
  getStudioMovieList(): void {
    /* tslint:disable:no-string-literal */
    this.tmdbService.getListByUrl('https://api.themoviedb.org/3' + '/discover/movie?with_companies=' + this.studio + '&page=1&include' +
    '_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=')
      .subscribe(
        (response) => {
          this.moviesList = response['results'];
        }
      );
  }
  printMovies(): void {
    console.log(this.studio);
  }

}
