import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks: [string, string] = ['https://www.youtube.com/watch?v=PKfsK7zhdf8', 'https://www.twitch.tv/chocbob'] 
  constructor() { }

  ngOnInit() {
  }

}
