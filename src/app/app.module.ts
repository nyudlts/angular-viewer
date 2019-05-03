import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoadingComponent } from './loading/loading.component';
import { PagerComponent } from './pager/pager.component';
import { ThumbnailsComponent } from './thumbnails/thumbnails.component';
import { ResourceComponent } from './resource/resource.component';
import { DisplayComponent } from './display/display.component';
import { MatSliderModule, MatSlideToggleModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
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
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
