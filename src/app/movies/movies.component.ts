import {Component, OnInit} from '@angular/core';
import {Movie} from '../../models/movie';
import {MovieService} from '../movie.service';

// import { fakeMovies } from '../fake-movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  // movie: Movie = {
  //   id: 1,
  //   name: 'Star wars',
  //   releaseYear: 1997
  // };
  movies: Movie[];

  // movies = fakeMovies;
  constructor(private movieService: MovieService) {

  }

  getMoviesFormService(): void {
    // this.movies = this.movieService.getMovies()
    this.movieService.getMovies().subscribe(
      (updatedMovies) => {
        this.movies = updatedMovies;
      }
    );
  }

  ngOnInit() {
    this.getMoviesFormService();
  }
  //
  // selectedMovie: Movie;
  //
  // onSelect(movie: Movie): void {
  //   this.selectedMovie = movie;
  // }
}
