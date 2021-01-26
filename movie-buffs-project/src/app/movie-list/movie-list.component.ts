import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private api: ApiService) { }

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

}
