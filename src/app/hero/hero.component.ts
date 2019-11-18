import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import Favico from 'favico.js';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, AfterViewInit {
  constructor() {}
  // =============================================================
  @ViewChild('faviconVideoElementNode', { static: false })
  faviconVideoElementNode: ElementRef;
  // =============================================================
  favicon = new Favico();

  ngAfterViewInit() {
    if (this.faviconVideoElementNode) {
      this.favicon.video(this.faviconVideoElementNode.nativeElement);
    }
  }

  ngOnInit() {}
}
