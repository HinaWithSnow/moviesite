import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { Movie } from "app/Classes";
import { MovieDataService } from "app/movie-data.service";


// const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
//   'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
//   'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
//   'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
//   'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
//   'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
//   'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
//   'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // formatter = (result: string) => result.toUpperCase();

  // search = (text$: Observable<string>) =>
  //   text$
  //     .debounceTime(200)
  //     .distinctUntilChanged()
  //     .map(term => term === '' ? []
  //       : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));



  public isDisplay: boolean = true;
  public focusFunction() {
    this.isDisplay = false;
  }
  public focusOutFunction() {
    this.isDisplay = true;
  }
  public movies: Array<Movie> = []
  public service: MovieDataService = new MovieDataService();

  constructor() {
    this.movies = this.service.movies;
  }



}
