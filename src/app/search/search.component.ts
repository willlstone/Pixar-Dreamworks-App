import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';
import {ActivatedRoute, RouterModule} from '@angular/router';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import {Subject} from 'rxjs';
import { AppRoutingModule} from '../app-routing.module';
import { Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  movies = [];

  constructor(private tmdb: TmdbService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
  }
  getMovieListByName(movieName): void {
    /* tslint:disable:no-string-literal */
    this.tmdb.getMovieListByName(movieName).subscribe(response => this.movies = response['results']);
  }
  submitForm() {
    console.log('submit');
    // location.replace('/movie/808');
    // this.router.navigate(['home']);
    // location.replace('/home');
  }

}
