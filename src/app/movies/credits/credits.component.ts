import { Component, OnInit } from '@angular/core';
import { ProfileURL } from 'src/app/art/profile-url.enum';
import { MovieService } from '../movie/service/movie.service';
import { Credits } from './model/credits';



@Component({
	selector: 'app-credits',
	templateUrl: './credits.component.html',
	styleUrls: ['./credits.component.css']
})
export class CreditsComponent implements OnInit {

	profileURL: typeof ProfileURL = ProfileURL;
	credits?: Credits;
	constructor(private movieService: MovieService) { }

	ngOnInit(): void {
		this.movieService.getMovieCredits(399566).subscribe({
			next: credits => this.credits = credits
		});
	}

	slideConfig = {
		"slidesToShow": 5, "slidesToScroll": 4, "arrows": true, "dots": true, "responsive": [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
					arrows: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					arrows: true,
					dots: false
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: false
				}
			}
		]
	};


}
