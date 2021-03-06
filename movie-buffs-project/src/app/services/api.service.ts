import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Movie } from '../models/movie.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  movies: Movie[] = [];
  pageCounter: number = 1;

  popularityApiUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=62c905dcaaa47382b2e1dad50f3a73e3';
  theaterApiUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=62c905dcaaa47382b2e1dad50f3a73e3&page=1&region=US';
  posterPathUrl = 'https://image.tmdb.org/t/p/original/';

  //this autimatically updates but i cant get it to push
  // theaterApiUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=62c905dcaaa47382b2e1dad50f3a73e3&';



  constructor(private http: HttpClient) { }
  
  clearMovies() {
    this.movies.length = 0;
  }

  getMostPopResults() {
    this.clearMovies()
    return this.http.get(`${this.popularityApiUrl}&sort_by=popularity.desc`).pipe(map(responseData => {
      let responseArray = [];
      for (let i in responseData) {
        responseArray.push(responseData[i])
      }
      responseArray = responseArray[1];
      return responseArray;
    }))
      .subscribe(data => {
        data.forEach (object => {
          const movieObj = {
            id: object.id, 
            title: object.title,
            releaseDate: object.release_date,
            posterPath: object.poster_path,
            rating: object.vote_average,
            overview: object.overview
          };
          this.movies.push(movieObj);
        })
      })
  }

  //Will not push data to HTML?
  getTheaterResults() {
    this.clearMovies()
    return this.http.get(`${this.theaterApiUrl}`).pipe(map(responseData => {
      let responseArray = [];
      for (let i in responseData) {
        responseArray.push(responseData[i])
      }
      responseArray = responseArray[2];
      return responseArray;
    }))
      .subscribe(data => {
        data.forEach(object => {
          const movieObj = {
            id: object.id, 
            title: object.title,
            releaseDate: object.release_date,
            posterPath: object.poster_path,
            rating: object.vote_average,
            overview: object.overview
          };
          this.movies.push(movieObj);
        })
      })
  }  
  
}
