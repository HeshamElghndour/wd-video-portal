import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  videoId: string;
  videoDetails: any[];
  
  
  getVideoId(){
    this.route.paramMap.subscribe(params => {
      this.videoId = params.get('videoId');
    })
  }
  getVideoDetails(){
    console.log(this.videoDetails);
    alert()
  }

  ngOnInit() {
  }
  constructor(private route: ActivatedRoute,  http: Http) { 
    this.getVideoId();
    let url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${this.videoId}&key=AIzaSyAcR7b_Lk2BbAy4wC9bInbkBpAgtH5kz-M`
    http.get(url)
    .subscribe(response => {
      this.videoDetails = response.json().items[0];
    }),
    () => {this.getVideoDetails()}
  }

}
