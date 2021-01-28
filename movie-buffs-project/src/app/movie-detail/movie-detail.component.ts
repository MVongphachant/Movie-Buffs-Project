import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../models/movie.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;


  constructor(private route: ActivatedRoute, 
              private router: Router,
              private api: ApiService) { }

  ngOnInit() {
    this.movie = {
      id: this.route.snapshot.params['id'],
      title: this.route.snapshot.params['title'],
      releaseDate: this.route.snapshot.params['release-date'],
      posterPath: this.api.posterPathUrl + this.route.snapshot.params['poster-path'],
      rating: this.route.snapshot.params['rating'],
      overview: this.route.snapshot.params['overview']
    }
  }

  onCloseDetails() {
    this.router.navigate(['/'])
  }

}
