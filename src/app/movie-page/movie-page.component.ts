import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import Movie, { getImage } from '../shared/movie.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {

  movie: Movie

  public movie_id: number

  constructor(private movieService: MoviesService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.movie_id = params['id'])
  }

  ngOnInit(): void {
      this.movieService.getMovie(this.movie_id)
      .then((params: Movie) => {
        this.movie = params

        console.log(this.movie)
      })
    }

    public getImage = getImage

}
