import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Movie from './shared/movie.model';

const url_api = "https://api.themoviedb.org/3"
const api_key = "b36041109a7a3a4100edaeace6f89cad"

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  public movies: Movie[] = []

  public getTrendingMovies(): Promise<Movie[]> {
    return this.http
      .get<Movie[]>(`${url_api}/trending/all/day?api_key=${api_key}`)
      .toPromise();
  }

  public getMovie(id: number): Promise<Movie> {
    return this.http
      .get<Movie>(`${url_api}/movie/${id}?api_key=${api_key}&language=en-US`)
      .toPromise();
  }



}


