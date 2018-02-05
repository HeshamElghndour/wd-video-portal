import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  videos: any[];
  constructor(http: Http) { 
    http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCgrIECcCJsqtXnomjlE7ZJQ&key=AIzaSyAcR7b_Lk2BbAy4wC9bInbkBpAgtH5kz-M&maxResults=50')
      .subscribe(response => {
        this.videos = response.json().items;
        console.log(this.videos);
      })
  }
  ngOnInit() {
  }

}
