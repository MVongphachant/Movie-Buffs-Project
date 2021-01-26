import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Movie } from '../models/movies';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  get(arg0: string) {
    throw new Error('Method not implemented.');
  }
  movies: Movie[] = [];
  apiKey: string = "eff49dddff24c084d86e79143ec6ccd7"
  apiURL: string ="https://api.themoviedb.org/3/search/movie"

  constructor(private http: HttpClient) { }

  getData(title: string): Observable<any> {
    if (title === null) {
      return of([])
    }
    return this.http.get(this.apiURL, {
      params: {
        api_key: this.apiKey,
        query: title ? title : 'a'
      },
    });
  };
}
