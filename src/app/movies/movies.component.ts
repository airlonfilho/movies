import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import Movie, { getImage } from '../shared/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {

  public movies: Movie[]

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.movieService.getTrendingMovies()
    .then((movies: any) => {
      this.movies = movies.results
      console.log(this.movies)
    })
    .catch((error: any) => {
      console.log(error)
    })
  }

  public getImage = getImage

}
