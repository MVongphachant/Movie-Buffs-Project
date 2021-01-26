import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;


  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.movie = {
      id: this.route.snapshot.params['id'],
      title: this.route.snapshot.params['title'],
      releaseDate: this.route.snapshot.params['release-date'],
      posterPath: this.route.snapshot.params['poster-path'],
      rating: this.route.snapshot.params['rating']
    }
  }

  onCloseDetails() {
    this.router.navigate(['/'])
  }

}
