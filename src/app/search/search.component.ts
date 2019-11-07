import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';
import {ActivatedRoute, RouterModule} from '@angular/router';
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
  submitForm(query) {
    console.log('submit');
    this.router.navigate(['/search/' + query]);
  }

}
