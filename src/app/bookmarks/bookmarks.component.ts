import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { bookmarksService } from '../services/bookmarks.service';
import {History} from '../models/history'

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit , OnChanges{
@Input()
bookmarkurl : string = ""
booksmarks : History[] = []
isShown: boolean = false ; // hidden by default

  constructor(private service : bookmarksService) { }

  ngOnInit(): void {
    
  }
  ngOnChanges(){
  function wait(ms:number){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }
 wait(500);
  this.service.getBookmarks().subscribe((bookmarks :any )=>{
    console.log(bookmarks.data)
  this.booksmarks=bookmarks.data
  this.ngOnInit()

 })
 console.log(this.booksmarks.length);
}
toggleShow() {

  this.isShown = ! this.isShown;
  
  }
  
}
