import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../weather-service.service';
import { NotificationDetails } from '../notification-details';

@Component({
  selector: 'app-user-list',
  templateUrl: './details-list.component.html',
  styleUrls: ['./details-list.component.css']
})
export class DetailsListComponent implements OnInit {

  notificationDetails: NotificationDetails[];

  constructor(private notificationService: WeatherServiceService) {
  }

  ngOnInit() {
    this.notificationService.findAll().subscribe(data => {
      this.notificationDetails = data;
    });
  }
}
