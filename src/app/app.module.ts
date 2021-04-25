import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movies/movie/movie.component';
import { PopularMoviesComponent } from './movies/popular-movies/popular-movies.component';
import {SlickCarouselModule} from 'ngx-slick-carousel';

import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingComponent } from './shared/rating/rating.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MovieMenuComponent } from './movies/movie/movie-menu/movie-menu.component';
import { CreditsComponent } from './movies/credits/credits.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    PopularMoviesComponent,
    RatingComponent,
    MovieMenuComponent,
    CreditsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
