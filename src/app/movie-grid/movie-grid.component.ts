import { Component, OnInit } from '@angular/core';
import { TmdbService} from '../tmdb.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-grid',
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.scss']
})
export class MovieGridComponent implements OnInit {
  private isMovie = true;
  moviesList = [];
  gridPath = this.route.snapshot.paramMap.get('grid');
  companyId = this.route.snapshot.paramMap.get('id');
  constructor(
    private tmdbService: TmdbService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    switch (this.gridPath) {
      case 'studio':
        this.getStudioMovieList();
        this.isMovie = true;
        console.log(this.isMovie)
        break;
      case 'search':
        this.getMovieListByQuery();
        this.isMovie = true;
        break;
      case 'network':
        this.getTVCompany();
        this.isMovie = false;
        break;
      default:
        console.log('URL did not specify search/studio');

    }
  }
  getTVCompany(): void {
    /* tslint:disable:no-string-literal */
    this.tmdbService.getListByUrl('https://api.themoviedb.org/3/discover/tv?page=1&with_networks=' + this.companyId + '&api_key=')
      .subscribe(
        (response) => {
          this.moviesList = response['results'];
        }
      );
  }
  getStudioMovieList(): void {
    this.tmdbService.getListByUrl('https://api.themoviedb.org/3' + '/discover/movie?with_companies=' + this.companyId + '&page=1&include' +
    '_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=')
      .subscribe(
        (response) => {
          this.moviesList = response['results'];
        }
      );
  }
  getMovieListByQuery(): void {
    this.tmdbService.getMovieListByName(this.companyId)
      .subscribe(
        (response) => {
          this.moviesList = response['results'];
        }
      );
  }

}
