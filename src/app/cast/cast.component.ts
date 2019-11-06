import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.scss']
})
export class CastComponent implements OnInit {
  private cast = [];
  private movieId = this.route.snapshot.paramMap.get('id');
  constructor(private tmdb: TmdbService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCreditsById();
  }
  getCreditsById(): void {
    /* tslint:disable:no-string-literal */
    this.tmdb.getCreditsById(this.movieId).subscribe(response => this.cast = response['cast']);
  }

}
