import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { Movie } from "app/Classes";
import { MovieDataService } from "app/movie-data.service";
import {
  trigger, state, style, animate, transition
} from '@angular/animations';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ]),
    trigger('HideState', [
      state('active', style({
        display: 'none'
      })),
      state('inactive', style({
        display: 'inherit'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])

  ]
})
export class MovieListComponent {
  public model: any;
  isDisplay: string = 'inactive';

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .map(term => term === '' ? []
        : this.movies.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));

  formatter = (x: { name: string }) => x.name;

  public focusFunction() {
    this.isDisplay = 'active';
  }
  public focusOutFunction() {
    this.isDisplay = 'inactive';
  }
  public movies: Array<Movie> = [];
  public Genres: Array<string> = [];
  public service: MovieDataService = new MovieDataService();

  constructor() {
    this.movies = [];
    this.service.movies.forEach(element => {
      this.movies.push(element);
    });
    this.Genres = this.service.GetGenres();
  }
  private SelectedGenre = [];
  IsSelected(g) {
    if (this.SelectedGenre.indexOf(g) >= 0) {
      return true;
    } else {
      return false;
    }
  }
  Reset() {
    this.SelectedGenre=[];
    this.movies = [];
    this.service.movies.forEach(element => {
      this.movies.push(element);
    });
  }
  FilterByGender(g: string) {
    this.SelectedGenre.push(g);
    let indexesToRemove: Array<number> = [];

    let n: number = 0;
    while (this.movies.length > 0 && this.movies.length > n) {
      let element: Movie = this.movies[n];
      n += 1;
      let isThere: boolean = false;
      element.Genre.forEach(gen => {
        if (gen == g && isThere == false) {
          isThere = true;
        }
      });
      if (isThere == false) {
        let index: number = this.movies.indexOf(element);
        if (index >= 0) {
          this.movies.splice(index, 1);
          n -= 1;
        }
      }
    }
  }

}


