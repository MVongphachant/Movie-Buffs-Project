import { Component, OnInit } from '@angular/core';
import { Movie } from '../movies';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
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

