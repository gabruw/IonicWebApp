import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  public userImg = "assets/img/userImg/myUserPic.png";
  public userName = "Gabriel França";
  public dateNow = new Date().toLocaleDateString("pt-BR");
  public postImg = "assets/img/postImg/maxresdefault.jpg";

  public likeCount = 0;
  public addLikeCount(): number{
    return this.likeCount++;
  }

  constructor() { }

  ngOnInit() {
  }

}
