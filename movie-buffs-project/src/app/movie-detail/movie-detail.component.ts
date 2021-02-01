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

starWidthStyle: string = "";

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
    console.log(this.movie)
    
    const starTotal = 5;
    const starPercentage = (this.movie.rating / 2 / starTotal) * 100;
    const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
    this.starWidthStyle = `width: ${starPercentageRounded}`
    console.log(starPercentageRounded)
    // document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded; 
}


  onCloseDetails() {
    this.router.navigate(['/'])
  }

}
