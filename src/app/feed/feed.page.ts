import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  public dateNow = new Date().toLocaleDateString("pt-BR");
  public timeNow = new Date().getTime().toLocaleString("pt-BR");

  public postUserList =[
    {
      "userImg": "assets/img/userImg/myUserPic.png",
      "userName": "Gabriel França",
      "postDate": "11 de Julho - 2019",
      "postDescription": "",
      "postImg": "assets/img/postImg/maxresdefault.jpg",
      "postLikes": 0
    },
    {
      "userImg": "assets/img/userImg/myUserPic.png",
      "userName": "Gabriel França",
      "postDate": "12 de Julho - 2019",
      "postDescription": "Hello guys, it works!",
      "postImg": "",
      "postLikes": 0
    },
  ]

  public postLikeControl(position: number){
    this.postUserList[position].postLikes++;
  }

  constructor() { }

  ngOnInit() { }
}