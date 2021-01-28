import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { WatchlistPageComponent } from './watchlist-page/watchlist-page.component';

const routes: Routes = [
  {path: 'movie-detail/:title/:poster-path/:rating/:overview', component: MovieDetailComponent},
  {path: 'watchlist-page', component: WatchlistPageComponent},
  { path: "movie-list",  component: MovieListComponent,}, 
  { path: "watchlist", component: WatchlistPageComponent},
  {path: '', component: HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
