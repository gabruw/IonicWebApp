import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  @ViewChild('slider') slider: any;

  slideOpts = {
    initialSlide: 0,
    autoplay: 1000,
    speed: 2000,
    paginationClickable: true
  };

  public slidePages = [
    {
      "title": "Title 1",
      "img": "assets/img/slides/slide-1.png",
      "content": "Ionic Slide",
      "pageNum": "1",
      "describe": "Nothing to expose now..."
    },
    {
      "title": "Title 2",
      "img": "assets/img/slides/slide-2.png",
      "content": "Ionic Slide",
      "pageNum": "2",
      "describe": "Nothing to expose now..."
    },
    {
      "title": "Title 3",
      "img": "assets/img/slides/slide-3.png",
      "content": "Ionic Slide",
      "pageNum": "3",
      "describe": "Nothing to expose now..."
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}