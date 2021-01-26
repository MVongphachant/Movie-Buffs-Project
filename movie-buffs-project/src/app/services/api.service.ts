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
  theaterApiUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=62c905dcaaa47382b2e1dad50f3a73e3';

  // primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22



  constructor(private http: HttpClient) { }

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
        data.forEach(object => {
          const movieObj = {
            id: object.id, 
            title: object.title,
            releaseDate: object.release_date,
            posterPath: object.poster_path,
            rating: object.vote_average
          };
          this.movies.push(movieObj);
        })
      })
  }

  //Will not push data to HTML?
  getTheaterResults() {
    this.clearMovies()
    return this.http.get(`${this.theaterApiUrl}&sort_by=release_date.desc`).pipe(map(responseData => {
      let responseArray = [];
      for (let i in responseData) {
        responseArray.push(responseData[i])
      }
      responseArray = responseArray[1];
      return responseArray;
    }))
      .subscribe(data => {
        data.forEach(object => {
          const movieObj = {
            id: object.id, 
            title: object.title,
            releaseDate: object.release_date,
            posterPath: object.poster_path,
            rating: object.vote_average
          };
          this.movies.push(movieObj);
        })
      })
  }

  getLeastPopResults() {
    this.clearMovies();
    return this.http.get(`${this.popularityApiUrl}&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22`).pipe(map(responseData => {
      const responseArray = [];
      for (let i in responseData) {
        responseArray.push(responseData[i])
      }
      return responseArray;
    }))
      .subscribe(data => {
        data[1].forEach(object => {
          const movieObj = {
            id: object.id, 
            title: object.title,
            releaseDate: object.release_date,
            posterPath: object.poster_path,
            rating: object.vote_average
          };
          this.movies.push(movieObj);
        })
      })
  }

  clearMovies() {
    this.movies.length = 0;
  }

  pageUpMostPopResults() {
    this.clearMovies();
    this.pageCounter++;
    return this.http.get(`${this.popularityApiUrl}&sort_by=popularity.desc&page=${this.pageCounter}`).pipe(map(responseData => {
      let responseArray = [];
      for (let i in responseData) {
        responseArray.push(responseData[i])
      }
      responseArray = responseArray[1];
      return responseArray;
    }))
      .subscribe(data => {
        data.forEach(object => {
          const movieObj = {
            id: object.id, 
            title: object.title,
            releaseDate: object.release_date,
            posterPath: object.poster_path,
            rating: object.vote_average
          };
          this.movies.push(movieObj);
        })
      })
  }

  pageDownMostPopResults() {
    this.clearMovies();
    if (this.pageCounter > 1) {
      this.pageCounter--;
    }
    return this.http.get(`${this.popularityApiUrl}&sort_by=popularity.desc&page=${this.pageCounter}`).pipe(map(responseData => {
      let responseArray = [];
      for (let i in responseData) {
        responseArray.push(responseData[i])
      }
      responseArray = responseArray[1];
      return responseArray;
    }))
      .subscribe(data => {
        data.forEach(object => {
          const movieObj = {
            id: object.id, 
            title: object.title,
            releaseDate: object.release_date,
            posterPath: object.poster_path,
            rating: object.vote_average
          };
          this.movies.push(movieObj);
        })
      })
  }

  pageUpLeastPopResults() {
    this.clearMovies();
    this.pageCounter++;
    return this.http.get(`${this.popularityApiUrl}&sort_by=popularity.asc&page=${this.pageCounter}`).pipe(map(responseData => {
      const responseArray = [];
      for (let i in responseData) {
        responseArray.push(responseData[i])
      }
      return responseArray;
    }))
      .subscribe(data => {
        data[1].forEach(object => {
          const movieObj = {
            id: object.id, 
            title: object.title,
            releaseDate: object.release_date,
            posterPath: object.poster_path,
            rating: object.vote_average
          };
          this.movies.push(movieObj);
        })
      })
  }

  pageDownLeastPopResults() {
    this.clearMovies();
    if (this.pageCounter > 1) {
      this.pageCounter--;
    }
    return this.http.get(`${this.popularityApiUrl}&sort_by=popularity.asc&page=${this.pageCounter}`).pipe(map(responseData => {
      const responseArray = [];
      for (let i in responseData) {
        responseArray.push(responseData[i])
      }
      return responseArray;
    }))
      .subscribe(data => {
        data[1].forEach(object => {
          const movieObj = {
            id: object.id, 
            title: object.title,
            releaseDate: object.release_date,
            posterPath: object.poster_path,
            rating: object.vote_average
          };
          this.movies.push(movieObj);
        })
      })
  }
  
}
