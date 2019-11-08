import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  private isMovie = true;
  private gridPath = this.route.snapshot.paramMap.get('grid');
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.gridPath === 'network') {
      this.isMovie = false;
    } else {
      this.isMovie = true;
    }
  }

}
