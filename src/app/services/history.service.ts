import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { History } from '../models/history';

@Injectable({
  providedIn: 'root'
})
export class historyService {

  constructor(private http: HttpClient){}

  public getHistory(): Observable<History[]> {
    return this.http.get<History[]>(`http://localhost:8000/api/history`);
  }
  addHistory(VideoUrl:string): any {
    return this.http.post(`http://localhost:8000/api/history`,{videoUrl:VideoUrl});
  }
}