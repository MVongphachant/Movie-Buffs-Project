import { Component, OnInit } from '@angular/core';
import { MovieSearch } from '../models/movies';
import { ApiService } from '../services/api.service';
import { MoviesService } from '../services/movies.service';
import { WatchlistService } from '../services/watchlist.service'

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {

  movies: MovieSearch[] = [];

  constructor(private api: ApiService,
    private moviesService: MoviesService, private watchlistService: WatchlistService) { }

  ngOnInit(): void {
  }

  getMovies(data: any) {
    return this.movies = data.results;
      // console.log(this.movies);
  }

  showMovies(query: string) {
    this.moviesService.getData(query).subscribe((data: any) => {
      // const movies = this.moviesService.movies = data.results;
      const movies =  data.results;
      console.log(movies)
      this.moviesService.setMovieSearch.emit(movies)
  })
  }

  addMovie(movie){
    this.watchlistService.addMovie(movie)
  }
  

}
