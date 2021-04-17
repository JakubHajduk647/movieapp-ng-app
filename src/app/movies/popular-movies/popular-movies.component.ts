import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {



  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};
  

 
  
  
  

  constructor() { }

  ngOnInit(): void {
  }

}
