import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TmdbService } from '../tmdb.service';
import {Movie} from '../movie';
import {Location} from '@angular/common';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  private isMovie = true;
  movieID = this.route.snapshot.paramMap.get('id');
  private grid = this.route.snapshot.paramMap.get('grid');
  movie;
  constructor(
    private route: ActivatedRoute,
    private tmdbService: TmdbService,
    private location: Location
  ) { }

  ngOnInit(): void {
    if (this.grid === 'tv') {
      this.getTV();
      this.isMovie = false;
    } else {
      this.getMovie();
      this.isMovie = true;
      console.log(this.movie);
    }
  }
  getMovie(): void {
    /* tslint:disable:no-string-literal */
    this.tmdbService.getMovieById(this.movieID)
      .subscribe(
        (response) => {
          this.movie = response;
        }
      );
  }
  getTV(): void {
    /* tslint:disable:no-string-literal */
    this.tmdbService.getTVById(this.movieID)
      .subscribe(
        (response) => {
          this.movie = response;
        }
      );
  }

}
