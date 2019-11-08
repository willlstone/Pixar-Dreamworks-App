import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-similar',
  templateUrl: './similar.component.html',
  styleUrls: ['./similar.component.scss']
})
export class SimilarComponent implements OnInit {
  private isMovie = true;
  private moviesList = [];
  private movieId = this.route.snapshot.paramMap.get('id');
  private grid = this.route.snapshot.paramMap.get('grid');
  constructor(private tmdb: TmdbService, private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.grid === 'tv') {
      this.getSimilarTV();
      this.isMovie = false;
    } else {
      this.getSimilarById();
      this.isMovie = true;
    }
  }
  getSimilarById(): void {
    /* tslint:disable:no-string-literal */
    this.tmdb.getSimilarById(this.movieId).subscribe(response => this.moviesList = response['results']);
  }
  getSimilarTV(): void {
    /* tslint:disable:no-string-literal */
    this.tmdb.getSimilarTV(this.movieId).subscribe(response => this.moviesList = response['results']);
  }

}
