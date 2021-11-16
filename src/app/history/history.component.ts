import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { historyService } from '../services/history.service';
import {History} from '../models/history'
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit , OnChanges {
@Input()
url : string = "" ;
@Output()
historyChange:EventEmitter<string> =new EventEmitter<string>();
historylist:History[]=[];
  constructor(private service :historyService ) { }

  ngOnInit(): void {
  }
  ngOnChanges(){
    this.service.getHistory().subscribe((history:any)=>{
      this.historylist=history.data;
      this.ngOnInit()
    })
  }
onClick(url : string){
  this.historyChange.emit(url)
}
}
