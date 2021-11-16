import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bookmarks } from '../models/bookmarks';

@Injectable({
  providedIn: 'root'
})
export class bookmarksService {

  constructor(private http: HttpClient){}

  public getBookmarks(): Observable<Bookmarks[]> {
    return this.http.get<Bookmarks[]>(`http://localhost:8000/api/bookmarks`);
  };

  addBookmarks(videoUrl:string): any {
    return this.http.post(`http://localhost:8000/api/bookmarks`,{videoUrl:videoUrl});
  }
}