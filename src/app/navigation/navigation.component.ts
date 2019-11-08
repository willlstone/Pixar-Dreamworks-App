import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Location} from '@angular/common';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  url = this.location.path();
  private isMovie = true;
  private gridPath = this.route.snapshot.paramMap.get('grid');

  constructor(private location: Location, private route: ActivatedRoute) { }
  ngOnInit() {
    if (this.gridPath === 'network') {
      this.isMovie = false;
      console.log(this.isMovie);
    } else {
      this.isMovie = true;
      console.log(this.isMovie);
      console.log(this.url);
    }
  }

}
