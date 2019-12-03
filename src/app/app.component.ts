import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
  //   console.log($event.target.scrollingElement.scrollTop);
  // }
}
