import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { HowComponent } from './how/how.component';
import { MainComponent } from './main/main.component';
import { WhatWhenComponent } from './what-when/what-when.component';
import { WhoWhereComponent } from './who-where/who-where.component';
import { WhyComponent } from './why/why.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HeroComponent,
    WhoWhereComponent,
    WhyComponent,
    HowComponent,
    WhatWhenComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
