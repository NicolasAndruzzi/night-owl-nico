import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import Favico from 'favico.js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  owlFace = '{O,O}';
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
