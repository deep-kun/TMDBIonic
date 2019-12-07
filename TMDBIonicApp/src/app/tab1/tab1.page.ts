import { Component } from '@angular/core';
import { FilmsWrapper } from '../models/all.films.response';
import { Film } from '../models/film';
import { AppConfigs } from '../AppConfigs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public films: Film[];

  constructor(http: HttpClient) {
    http.get<FilmsWrapper>(AppConfigs.ApiUrl + '/discover/movie').subscribe(results => {
      this.films = results.results;
      console.log(this.films);
      console.log(this.films.length);
    }, error => console.error(error));
  }
}
