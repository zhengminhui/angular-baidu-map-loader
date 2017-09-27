import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BaiduMapsComponent } from './baidu-maps/baidu-maps.component';

@NgModule({
  declarations: [
    AppComponent,
    BaiduMapsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
