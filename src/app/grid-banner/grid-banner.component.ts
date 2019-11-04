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
  ngOnInit() {
    this.setBanner();
  }

}
