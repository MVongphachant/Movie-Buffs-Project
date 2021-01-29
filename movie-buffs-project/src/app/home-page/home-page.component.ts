import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';
import { ApiService } from '../services/api.service';
import { MoviesService } from '../services/movies.service';
import { WatchlistService } from '../services/watchlist.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private api: ApiService,
    private moviesService: MoviesService,
    private watchlist: WatchlistService) { }

  ngOnInit(): void {
    this.api.getMostPopResults();

    this.movies = this.api.movies;
  }

  addMovie(movie){
    this.watchlist.addMovie(movie)
  }
  

  

  // onPageUpMost() {
  //   this.api.pageUpMostPopResults();
  // }

  // onPageDownMost() {
  //   this.api.pageDownMostPopResults();
  // }

  // onPageUpLeast() {
  //   this.api.pageUpLeastPopResults();
  // }

  // onPageDownLeast() {
  //   this.api.pageDownLeastPopResults();
  // }
  }
