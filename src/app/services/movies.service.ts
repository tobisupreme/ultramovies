import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=59cebb06e7b674cc5c9a3387551bf43c`)
  }
}
