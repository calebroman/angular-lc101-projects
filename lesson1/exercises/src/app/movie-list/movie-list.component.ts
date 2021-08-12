import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies: [string, string, string, string] = ['The Manchurian Candidate', 'Oceans 8', 'Seas 3', 'Cars 7: The Human Race is Done For'];

   constructor() { }

   ngOnInit() {
   }

}
