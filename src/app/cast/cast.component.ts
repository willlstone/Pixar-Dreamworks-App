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
  private grid = this.route.snapshot.paramMap.get('grid');
  constructor(private tmdb: TmdbService, private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.grid === 'tv') {
      this.getTVCreditsById();
    } else {
      this.getCreditsById();
    }
  }
  getCreditsById(): void {
    /* tslint:disable:no-string-literal */
    this.tmdb.getCreditsById(this.movieId).subscribe(response => {this.cleanCast(response['cast']); });
  }
  getTVCreditsById(): void {
    this.tmdb.getTVCreditsById(this.movieId).subscribe(response => this.cast = response['cast']);
  }
  cleanCast(cast): void {
    cast.forEach((person) => {
      if (person['profile_path']) {
        this.cast.push(person);
      }
    });
  }
}
