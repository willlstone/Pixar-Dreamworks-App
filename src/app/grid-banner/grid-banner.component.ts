import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-grid-banner',
  templateUrl: './grid-banner.component.html',
  styleUrls: ['./grid-banner.component.scss']
})
export class GridBannerComponent implements OnInit {
  studio = +this.route.snapshot.paramMap.get('id');
  private grid = this.route.snapshot.paramMap.get('grid');
  private isMovie = true;
  bannerURL;
  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }
  setBanner() {
    switch (this.studio) {
      case 3:
        this.bannerURL = 'https://wallpaperaccess.com/full/331666.jpg';
        break;
      case 521:
        this.bannerURL = 'https://images5.alphacoders.com/499/499486.jpg';
        break;
      default:
        console.log(this.studio);
        break;
    }
  }

  setTVBanner() {
    switch (this.studio) {
      case 16:
        this.bannerURL = 'https://wallpaperaccess.com/full/265365.jpg';
        break;
      case 19:
        this.bannerURL = 'https://wallpaperaccess.com/full/1202063.jpg';
        break;
      default:
        console.log(this.studio);
        break;
    }
  }
  ngOnInit() {
    if (this.grid === 'network') {
      this.setTVBanner();
      this.isMovie = false;
    } else {
      this.setBanner();
      this.isMovie = true;
    }
  }

}
