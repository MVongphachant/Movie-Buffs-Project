import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  onGetMostPop() {
    this.api.getMostPopResults();
  }
  onGetTheaters() {
    this.api.getTheaterResults();
  }

}
