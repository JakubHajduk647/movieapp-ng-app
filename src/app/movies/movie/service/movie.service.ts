import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../../model/movie';
import {catchError,tap} from 'rxjs/operators';
import { Credits } from '../../credits/model/credits';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private BASE_URL = "http://localhost:8080/movie/"
  constructor(private http: HttpClient) { }

  getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(this.BASE_URL + id);
  }
  getMovieCredits(id: number): Observable<Credits> {
    return this.http.get<Credits>(this.BASE_URL + id +'/credits');
  }
  private handleError(err: HttpErrorResponse){
  }
}
