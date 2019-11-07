import { Component, OnInit } from '@angular/core';
import { TmdbService} from '../tmdb.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-grid',
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.scss']
})
export class MovieGridComponent implements OnInit {
  moviesList = [];
  gridPath = this.route.snapshot.paramMap.get('grid');
  studio = this.route.snapshot.paramMap.get('id');
  constructor(
    private tmdbService: TmdbService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    switch (this.gridPath) {
      case 'studio':
        this.getStudioMovieList();
        break;
      case 'search':
        this.getMovieListByQuery();
        break;
      default:
        console.log('URL did not specify search/studio');

    }
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
  getMovieListByQuery(): void {
    this.tmdbService.getMovieListByName(this.studio)
      .subscribe(
        (response) => {
          this.moviesList = response['results'];
        }
      );
  }

}
