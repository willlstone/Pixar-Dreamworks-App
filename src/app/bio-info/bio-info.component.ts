import { Component, OnInit } from '@angular/core';
import {TmdbService} from '../tmdb.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-bio-info',
  templateUrl: './bio-info.component.html',
  styleUrls: ['./bio-info.component.scss']
})
export class BioInfoComponent implements OnInit {
  private bio;
  private bioId = this.route.snapshot.paramMap.get('id');
  constructor(private tmdb: TmdbService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getBioInfo();
  }
  getBioInfo(): void {
    this.tmdb.getBioInfo(this.bioId).subscribe(response => this.bio = response);
  }

}
