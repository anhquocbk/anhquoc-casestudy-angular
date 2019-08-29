import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getMovieFromRoute();
  }

  getMovieFromRoute(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieFormId(id).subscribe(movie => this.movie = movie);
  }

  goBack(): void {
    this.location.back();
  }
}
