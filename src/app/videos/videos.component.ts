import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  videoId: string;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // observable way
    this.route.paramMap.subscribe(params => {
      console.log(params.get('videoId'));
      this.videoId = params.get('videoId');
    });
  }

}
