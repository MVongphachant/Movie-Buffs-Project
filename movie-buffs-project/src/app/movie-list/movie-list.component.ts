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

  constructor(private api: ApiService,
              private moviesService: MoviesService, private watchlistService: WatchlistService) { }

  ngOnInit() {
    this.movies = this.api.movies;
  }

  onPageUpMost() {
    this.api.pageUpMostPopResults();
  }

  onPageDownMost() {
    this.api.pageDownMostPopResults();
  }

  onPageUpLeast() {
    this.api.pageUpLeastPopResults();
  }

  onPageDownLeast() {
    this.api.pageDownLeastPopResults();
  }

  addMovie(movie){
    this.watchlistService.addMovie(movie)
  }

  

}
