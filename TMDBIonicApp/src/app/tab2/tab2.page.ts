import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenresResponse, Genre } from '../models/genres';
import { Film } from '../models/film';
import { AppConfigs } from '../AppConfigs';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public film: Film;
  public genres: Genre[];
  public readonly constans: AppConfigs;

  constructor(private http: HttpClient) {
    this.film = JSON.parse(localStorage.getItem('film'));
    localStorage.removeItem('film');

    this.constans = AppConfigs;
    http.get<GenresResponse>(AppConfigs.ApiUrl + '/genre/movie/list').subscribe(res =>{
      this.genres = res.genres;
    }, error => console.error(error));

    // http.get<FilmsWrapper>(AppConfigs.ApiUrl + '/discover/movie').subscribe(results => {
    //   this.films = results.results;
    // }, error => console.error(error));
  }

  public GetGenresNames(ids: number[]): string {
    let res = '';
    ids.forEach(element => {
      if (res !== '') {
        res += ', ';
      }
      res += this.genres.find(g => g.id === element).name ;
    });
    return res;
  }

}
