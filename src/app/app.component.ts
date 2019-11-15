import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Favico from 'favico.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
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
}
