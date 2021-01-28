import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { WatchlistPageComponent } from '../watchlist-page/watchlist-page.component';


const routes: Routes = [
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }