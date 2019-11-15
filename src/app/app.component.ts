import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

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
  Favico = require('favico.js');
  favicon = new this.Favico();

  ngAfterViewInit() {
    if (this.faviconVideoElementNode) {
      this.favicon.video(this.faviconVideoElementNode.nativeElement);
    }
  }
}
