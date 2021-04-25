import { Component, OnInit } from '@angular/core';
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-movie-menu',
  templateUrl: './movie-menu.component.html',
  styleUrls: ['./movie-menu.component.css']
})
export class MovieMenuComponent implements OnInit {
  faList=faList;
  faEye= faEye;
  faHeart = faHeart;

  constructor() { }

  ngOnInit(): void {
  }

}
