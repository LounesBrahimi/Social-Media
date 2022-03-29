import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostingComponent } from './posting/posting.component';
import { GettingComponent } from './getting/getting.component';
import { PostingServiceService } from './posting-service.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PostingComponent,
    GettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [PostingServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
