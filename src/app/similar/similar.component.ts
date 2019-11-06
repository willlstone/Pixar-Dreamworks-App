import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-similar',
  templateUrl: './similar.component.html',
  styleUrls: ['./similar.component.scss']
})
export class SimilarComponent implements OnInit {
  private moviesList = [];
  private movieId = this.route.snapshot.paramMap.get('id');
  constructor(private tmdb: TmdbService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getSimilarById();
  }
  getSimilarById(): void {
    /* tslint:disable:no-string-literal */
    this.tmdb.getSimilarById(this.movieId).subscribe(response => this.moviesList = response['results']);
  }

}
