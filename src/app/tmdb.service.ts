import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private tmdbURL = 'https://api.themoviedb.org/';  // URL to web api
  private tmdbDiscover = '';
  private apiKEY = '2450bb1a282abe67567830ede1023579';
  constructor(
    private http: HttpClient,
  ) { }
  getList() {
    return this.http.get(this.tmdbURL + '3/discover/movie?with_companies=3&page=1&include' +
      '_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=' + this.apiKEY);
  }
  getListByUrl(url) {
    return this.http.get(url + this.apiKEY);
  }
  getMovieListByName(movieName) {
    return this.http.get(this.tmdbURL + '3/search/movie?api_key=' + this.apiKEY + '&query=' + movieName);
  }
  getMovieById(id) {
    return this.http.get(this.tmdbURL + '3/movie/' + id + '?api_key=' + this.apiKEY + '&language=en-US');
  }
  getVideosById(id) {
    return this.http.get(this.tmdbURL + '3/movie/' + id + '/videos?api_key=' + this.apiKEY + '&language=en-US');
  }
}
