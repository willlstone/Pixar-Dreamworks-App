import { AfterViewInit, Component, OnInit } from '@angular/core';
import 'jarallax';
declare var jarallax: any;

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.scss']
})
export class StudioComponent implements OnInit, AfterViewInit {
  ngAfterViewInit() {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.2
    });
  }
  constructor() {
  }

  ngOnInit() {
  }
}
