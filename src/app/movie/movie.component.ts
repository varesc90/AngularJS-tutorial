import { Component } from '@angular/core';

import {Movie} from './movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {

  movie: Movie;
  title = 'List of Movies';

}
