import { Component, OnInit } from '@angular/core';
import { MovieSearch } from '../models/movies';
import { ApiService } from '../services/api.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {

  movies: MovieSearch[] = [];

  constructor(private api: ApiService,
    private moviesService: MoviesService) { }

  ngOnInit(): void {
  }

  onGetLeastPop() {
    this.api.getLeastPopResults();
  }

  getMovies(data: any) {
    return this.movies = data.results;
      // console.log(this.movies);
  }

  showMovies(query: string) {
    console.log(query)
    this.moviesService.getData(query).subscribe((data: any) => {
      this.getMovies(data);
    })
  }

}
