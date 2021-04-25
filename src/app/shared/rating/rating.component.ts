import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit ,OnChanges{
  faStar = faStar;
  rating: number = 9.5;
  cropWidth: number =100;

  constructor() { }
  ngOnChanges(): void {
    this.cropWidth = this.rating * 10;
  }

  ngOnInit(): void {
  }

}
