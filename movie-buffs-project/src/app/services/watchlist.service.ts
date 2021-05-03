import { Injectable } from '@angular/core';
import { MovieDetailsObject } from '../models/api-response'

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
watchlistMovies: MovieDetailsObject[]=[];

addMovie(movie:MovieDetailsObject){
  this.watchlistMovies.push(movie)
  console.log(this.watchlistMovies)
}

removeMovie(movie:MovieDetailsObject){
  let index = this.watchlistMovies.findIndex(item=>item.id===movie.id)
  this.watchlistMovies.splice(index,1)
}
}