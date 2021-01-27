import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';
import { ApiService } from '../services/api.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private api: ApiService,
    private moviesService: MoviesService) { }

  ngOnInit(): void {

    this.movies = this.api.movies;
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
