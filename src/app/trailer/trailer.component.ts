import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.scss']
})
export class TrailerComponent implements OnInit {
  private key;
  private movieId = this.route.snapshot.paramMap.get('id');
  constructor(private tmdb: TmdbService, private sanitizer: DomSanitizer, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getVideoById();
  }
  getVideoById(): void {
    /* tslint:disable:no-string-literal */
    this.tmdb.getVideosById(this.movieId).subscribe(jsonData => {this.getTrailer(jsonData['results']); });
  }
  getTrailer(jsonData): void {
    for (const video of jsonData) {
      if (video.type === 'Trailer' && video.site === 'YouTube') {
        this.key = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video.key);
        console.log(this.key);
        break;
      }
    }
  }

}
