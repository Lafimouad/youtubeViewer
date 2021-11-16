import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ViewerComponent } from './viewer/viewer.component';
import { HistoryComponent } from './history/history.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ViewerComponent,
    HistoryComponent,
    BookmarksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
