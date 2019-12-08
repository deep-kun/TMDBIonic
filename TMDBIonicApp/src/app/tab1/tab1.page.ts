import { Component } from '@angular/core';
import { FilmsWrapper } from '../models/all.films.response';
import { Film } from '../models/film';
import { AppConfigs } from '../AppConfigs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GenresResponse, Genre } from '../models/genres';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public films: Film[];
  public genres: Genre[];
  public readonly constans: AppConfigs;

  public OnClick(f: Film) {
    localStorage.removeItem('film');
    localStorage.setItem('film', JSON.stringify(f));
    this.router.navigate(['tabs/tab2']);
  }

  constructor(http: HttpClient, private router: Router) {
    this.constans = AppConfigs;
    http.get<GenresResponse>(AppConfigs.ApiUrl + '/genre/movie/list').subscribe(res =>{
      this.genres = res.genres;
    }, error => console.error(error));

    http.get<FilmsWrapper>(AppConfigs.ApiUrl + '/discover/movie').subscribe(results => {
      this.films = results.results;
    }, error => console.error(error));
  }

  public GetGenresNames(ids: number[]): string {
    let res = '';
    ids.forEach(element => {
      if (res !== '')
      {
        res += ', ';
      }
      res += this.genres.find(g => g.id === element).name ;
    });

    return res;
  }
}
