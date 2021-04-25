import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie';
import { MovieService } from './service/movie.service';
import { PosterURL } from 'src/app/art/poster-url.enum';
//font-awesome icons
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faFireAlt } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'



@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
  
})
export class MovieComponent implements OnInit {

 posterURL: typeof  PosterURL= PosterURL;
 public movie? : Movie;
 faStar = faStar;
 faFireAlt = faFireAlt;
 faClock = faClock;
 //active tab
 active : number = 1;
  
  constructor(private movieService:MovieService ) { }

  ngOnInit(): void {
     this.movieService.getMovieById(399566).subscribe({
       next: movie => this.movie = movie
     });
  }

}
