import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SizerComponent } from './sizer/sizer.component';
import { LogComponent } from './log/log.component';

@NgModule({
  declarations: [
    AppComponent,
    SizerComponent,
    LogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
