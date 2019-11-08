import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Location} from '@angular/common';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  url = this.location.path();

  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
    console.log(this.url);
  }

}
