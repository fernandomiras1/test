import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// solo el boton
import { NGZButtonModule } from 'my-zumo';
// toda la libreria
// import { MyZumoModule } from 'my-zumo';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NGZButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
