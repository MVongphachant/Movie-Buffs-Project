import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';
import { ApiService } from '../services/api.service';
import { MoviesService } from '../services/movies.service';
import { WatchlistService } from '../services/watchlist.service'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  movieSearch = [];

  constructor(private api: ApiService,
              private moviesService: MoviesService, private watchlistService: WatchlistService) { }

  ngOnInit() {
    // this.movies = this.api.movies;
    this.moviesService.movieSearch.subscribe(data => console.log(data))
  }

  addMovie(movie){
    this.watchlistService.addMovie(movie)
  }


}
