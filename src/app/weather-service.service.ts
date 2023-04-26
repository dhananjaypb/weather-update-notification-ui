import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NotificationDetails } from './notification-details';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class WeatherServiceService {

  private notificationUpdateUrl: string;

  constructor(private http: HttpClient) {
    this.notificationUpdateUrl = 'http://localhost:8081/weather-update-notification';
  }

  public findAll(): Observable<NotificationDetails[]> {
    
    return this.http.get<NotificationDetails[]>(this.notificationUpdateUrl+"/getAllNotificationDetails");
  }

  public save(notification: NotificationDetails) {
    return this.http.post<NotificationDetails>(this.notificationUpdateUrl+"/create", notification);
  }
}