import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './components/app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowComponent } from './components/show/show.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RoutingModule } from './routing/routing.module';
import { SearchComponent } from './components/search/search.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { CoverComponent } from './components/cover/cover.component';



@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    NavigationComponent,
    SearchComponent,
    CoverComponent
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
