import { Component, OnInit } from '@angular/core';
import { MovieDataService } from "app/movie-data.service";
 import { ActivatedRoute, Params } from "@angular/router";
import { Movie } from "app/Classes";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.sass']
})
export class MovieComponent {
  public movie: Movie = new Movie();
  constructor(private service: MovieDataService, private activatedRoute: ActivatedRoute) {
    let userId = "";
    this.activatedRoute.params.subscribe((params: Params) => {
      userId = params['id'];
    });

    let link: string = "movie/" + userId;
    service.movies.forEach(element => {
      if (element.Link == link) {
        this.movie = element;
      }
    });
  }
}
