import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  movies = [];
  constructor(private tmdb: TmdbService, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  getMovieListByName(movieName): void {
    /* tslint:disable:no-string-literal */
    this.tmdb.getMovieListByName(movieName).subscribe(response => this.movies = response['results']);
  }

}