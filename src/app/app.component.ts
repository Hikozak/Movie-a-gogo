import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  movieCollection: Array<object> = [];
  movies: object;

  code: number;
  title: string;
  genre: [{
    category: string
  }]
  year: number;
  cast: [{
    name: string
  }]

  printing = false;
 

  addMovie(): boolean{
    this.printing = false ;
    this.movies = {
      
      movieCode: this.code,
      movieTitle: this.title,
      movieGenre: this.genre,
      movieYear: this.year,
      movieCase: this.cast

    }
    this.movieCollection.push(this.movies); 
    this.clearValue;
    return true;
  }

  clearValue(): void{
    this.code = null;
    this.title = null;
    this.genre = null;
    this.year = null;
    this.cast = null;
    
  }

  listMovies(): void{
    console.log('Showing movies');
    this.printing = true;
  }

  onSubmit(reg){
    console.log(reg);
  }

}
