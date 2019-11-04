import { Component, OnInit } from '@angular/core';
import { TmdbService} from '../tmdb.service';

@Component({
  selector: 'app-movie-grid',
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.scss']
})
export class MovieGridComponent implements OnInit {
  moviesList = [];
  constructor(
    private tmdbService: TmdbService
  ) { }

  ngOnInit() {
    // this.tmdbService.getMovies();
    this.getList();
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
  printMovies(): void {
    console.log(this.moviesList);
  }

}
