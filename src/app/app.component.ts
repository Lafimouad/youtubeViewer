import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { bookmarksService } from './services/bookmarks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  title = 'youtubeViewer';
  newUrl =""
  bookmarkurl = ""
  @Input() url :string ="";
  @Output()
  urlChanged:EventEmitter<string> =new EventEmitter<string>();
  @Output()
  bookmarksChange : EventEmitter<string> =new EventEmitter<string>();
  constructor(private service : bookmarksService){

  }
  getData(data : string){
    if(data !=""){
      this.newUrl = data
      this.urlChanged.emit(this.newUrl)
    }
    else {
      this.newUrl=""
      this.urlChanged.emit(this.newUrl)
    }
   
  }
  addToBookmarks(){
this.service.addBookmarks(this.newUrl).subscribe(()=>{
  
}) 
this.bookmarkurl=""
this.bookmarkurl = this.newUrl
this.bookmarksChange.emit(this.bookmarkurl) ;
  }
}
