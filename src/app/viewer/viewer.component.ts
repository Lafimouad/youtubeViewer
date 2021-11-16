import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {
@Input()
url : string =""
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
document.getElementById("id")?.setAttribute("src",this.url )  }
}
