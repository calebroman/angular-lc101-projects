import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Very PHUN Photos';
  image1 = 'https://i.imgur.com/AvUCqpz.jpg';
  image2 = 'https://i.imgur.com/T12gPlq.jpeg';
  image3 = 'https://i.imgur.com/RN3SgFX.jpeg';

  constructor() { }

  ngOnInit() {
  }

}