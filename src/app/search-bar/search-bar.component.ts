import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { historyService } from '../services/history.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
 url : string = ""
 currentUrl : string = ""
  constructor(private service:historyService) { }
@Output()
urlChange:EventEmitter<string> =new EventEmitter<string>();
  ngOnInit(): void {
  }
  youtube_parser(url : string){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}
  onClick(){
var videoId = this.youtube_parser(this.url);
const VideoUrl="https://www.youtube.com/embed/"+videoId;
this.service.addHistory(VideoUrl).subscribe(()=>{
  if(VideoUrl==this.currentUrl){
    this.urlChange.emit("")
    this.urlChange.emit(VideoUrl)
  }
  else {
    this.currentUrl= VideoUrl
    this.urlChange.emit(VideoUrl)
  }
  
});
  }

}
