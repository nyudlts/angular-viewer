import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { TopComponent } from './top/top.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoadingComponent } from './loading/loading.component';
import { PagerComponent } from './pager/pager.component';
import { ThumbnailsComponent } from './thumbnails/thumbnails.component';
import { ResourceComponent } from './resource/resource.component';
import { DisplayComponent } from './display/display.component';
import { MatSliderModule, MatSlideToggleModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    TopComponent,
    NavbarComponent,
    LoadingComponent,
    PagerComponent,
    ThumbnailsComponent,
    ResourceComponent,
    DisplayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSliderModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
