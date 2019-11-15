import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'night-owl-nico';
  faviconLinkOverrideElelment: any = null;
  numbers: any = interval(500);
  regularInterval = this.numbers.pipe(takeWhile(() => this.alive));
  currentFrame = 1;
  totalNumberOfFrames = 240;
  alive = true;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.faviconLinkOverrideElelment = this.document.querySelector(
      '#faviconLinkOverrideElelment'
    );
  }

  ngOnInit() {
    if (this.faviconLinkOverrideElelment) {
      this.regularInterval.subscribe(() => this.rotateMoonFavicon());
    }
  }

  rotateMoonFavicon(): void {
    // console.time();
    // tslint:disable-next-line: max-line-length
    this.faviconLinkOverrideElelment.href = `/assets/simple-192x192-moon-rotation-frames/simple-192x192-moon-rotation-frame-${this.currentFrame}.png`;
    this.currentFrame++;
    this.currentFrame =
      this.currentFrame > this.totalNumberOfFrames ? 1 : this.currentFrame;
    // console.timeEnd();
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
