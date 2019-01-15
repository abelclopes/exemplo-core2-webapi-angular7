import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadService } from './upload-imagens/upload.service';
import { UploadServiceRest } from './upload-imagens/upload.service-rest';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,    
    AppRoutingModule
  ],
  providers: [UploadService,UploadServiceRest],
  bootstrap: [AppComponent]
})
export class AppModule { }
