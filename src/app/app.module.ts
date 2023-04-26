import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DetailsListComponent } from './details-list/details-list.component';
import { NotificationFormComponent } from './notification-form/notification-form.component';
import { WeatherServiceService } from './weather-service.service';


@NgModule({
  declarations: [
    AppComponent,
    DetailsListComponent,
    NotificationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WeatherServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }