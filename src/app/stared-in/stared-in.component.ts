import { Component, OnInit } from '@angular/core';
import {TmdbService} from '../tmdb.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-stared-in',
  templateUrl: './stared-in.component.html',
  styleUrls: ['./stared-in.component.scss']
})
export class StaredInComponent implements OnInit {
  private cast = [];
  private backdrops = [];
  private personId = this.route.snapshot.paramMap.get('id');
  constructor(private tmdb: TmdbService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getStaredIn();
  }
  getStaredIn(): void {
    /* tslint:disable:no-string-literal */
    this.tmdb.getStaredIn(this.personId).subscribe(response => this.cast = response['cast']);
  }

}
