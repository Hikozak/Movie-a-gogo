import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

import { AppComponent } from '../app.component';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})

export class AddMovieComponent implements OnInit {

  @Output() addClick = new EventEmitter<any>();
  flag = 'add';
  
  addMovie(){
    this.addClick.emit({mode: this.flag});
  }

  constructor() { }

  ngOnInit() {
  }

}
