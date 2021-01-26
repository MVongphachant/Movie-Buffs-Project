import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from './movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  get(arg0: string) {
    throw new Error('Method not implemented.');
  }

  movies: Movie[] = [];
  apiKey: string = "62c905dcaaa47382b2e1dad50f3a73e3"
  apiURL: string ="https://api.themoviedb.org/3/search/movie"

  constructor(private http: HttpClient) { }

  getData(title: string): Observable <any> {
    if (!title) {
      return of([])
    }
    return this.http.get(this.apiURL, {
      params: {
        api_key: this.apiKey,
        query: title
      },
    });
  };
}


