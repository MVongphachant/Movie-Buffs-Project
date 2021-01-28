import { Component, OnInit } from '@angular/core';
import { WatchlistService } from '../services/watchlist.service'
import { MovieDetailsObject } from '../services/api-response'


@Component({
  selector: 'app-watchlist-page',
  templateUrl: './watchlist-page.component.html',
  styleUrls: ['./watchlist-page.component.css']
})
export class WatchlistPageComponent implements OnInit {

  watchlist: MovieDetailsObject[]; 
  constructor(private watchlistService: WatchlistService) { }

  ngOnInit(): void {
    this.watchlist = this.watchlistService.watchlistMovies
  }

  removeMovie(movie:MovieDetailsObject){
    this.watchlistService.removeMovie(movie);
  }
}
