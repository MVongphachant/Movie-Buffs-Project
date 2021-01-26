import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  onGetMostPop() {
    this.api.getMostPopResults();
  }

  onGetLeastPop() {
    this.api.getLeastPopResults();
  }

}
