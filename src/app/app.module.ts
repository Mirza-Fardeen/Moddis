import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalwindowComponent } from './modalwindow/modalwindow.component';
import { GroundfloorComponent } from './groundfloor/groundfloor.component';
import { FirstfloorComponent } from './firstfloor/firstfloor.component';
import { SecondfloorComponent } from './secondfloor/secondfloor.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ModalwindowComponent,
    GroundfloorComponent,
    FirstfloorComponent,
    SecondfloorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
