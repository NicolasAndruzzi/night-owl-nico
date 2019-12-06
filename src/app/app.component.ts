import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
  //   console.log($event.target.scrollingElement.scrollTop);
  // }

  ngOnInit() {
    console.log('---------------------------------------');
    console.log('███╗   ██╗██╗ ██████╗ ██╗  ██╗████████╗');
    console.log('████╗  ██║██║██╔════╝ ██║  ██║╚══██╔══╝');
    console.log('██╔██╗ ██║██║██║  ███╗███████║   ██║');
    console.log('██║╚██╗██║██║██║   ██║██╔══██║   ██║');
    console.log('██║ ╚████║██║╚██████╔╝██║  ██║   ██║');
    console.log('╚═╝  ╚═══╝╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝');
    console.log('');
    console.log(' ██████╗ ██╗    ██╗██╗');
    console.log('██╔═══██╗██║    ██║██║');
    console.log('██║   ██║██║ █╗ ██║██║');
    console.log('██║   ██║██║███╗██║██║');
    console.log('╚██████╔╝╚███╔███╔╝███████╗');
    console.log(' ╚═════╝  ╚══╝╚══╝ ╚══════╝');
    console.log('');
    console.log('███╗   ██╗██╗ ██████╗ ██████╗');
    console.log('████╗  ██║██║██╔════╝██╔═══██╗');
    console.log('██╔██╗ ██║██║██║     ██║   ██║');
    console.log('██║╚██╗██║██║██║     ██║   ██║');
    console.log('██║ ╚████║██║╚██████╗╚██████╔╝');
    console.log('╚═╝  ╚═══╝╚═╝ ╚═════╝ ╚═════╝');
    console.log('---------------------------------------');
  }
}
