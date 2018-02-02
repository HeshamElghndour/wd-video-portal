@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular app';
  videos: any[];
  constructor(http: Http) { 
    http.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyAcR7b_Lk2BbAy4wC9bInbkBpAgtH5kz-M&channelId=UCgrIECcCJsqtXnomjlE7ZJQ&part=snippet,id&order=date&maxResults=50')
      .subscribe(response => {
        this.videos = response.json().items;
        console.log(this.videos);
      })
  }
}
