import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'night-owl-nico';
  faviconLinkOverrideElelment: any;
  // Calculate interval based on how many frames there are + how fast we want
  // moon to rotate
  // Could it be possible to throttle this interval with a user input on the
  // site??? (Allowing them to increase/decrease moon rotations.  Achievement?)
  // Reverse rotations?  Apply other effects?
  // ===============================
  numbers: any = interval(1000);
  // ===============================
  alive = true;
  regularInterval = this.numbers.pipe(takeWhile(() => this.alive));
  currentFrame = 1;
  totalNumberOfFrames = 5;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.regularInterval.subscribe(() => this.rotateMoonFavicon());
  }

  rotateMoonFavicon(): void {
    this.faviconLinkOverrideElelment = this.document.querySelector(
      '#faviconLinkOverrideElelment'
    );
    this.faviconLinkOverrideElelment.href = `/assets/favicon-${this.currentFrame}.ico`;
    this.currentFrame++;
    if (this.currentFrame > this.totalNumberOfFrames) {
      this.currentFrame = 1;
    }
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
