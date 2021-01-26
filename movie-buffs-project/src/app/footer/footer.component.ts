import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private api: ApiService,
    private moviesService: MoviesService) { }

  ngOnInit(): void {
  }

  onGetMostPop() {
    this.api.getMostPopResults();
  }

}
