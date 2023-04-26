import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { WeatherServiceService } from '../weather-service.service';
import { NotificationDetails } from '../notification-details';

@Component({
  selector: 'app-user-form',
  templateUrl: './notification-form.component.html',
  styleUrls: ['./notification-form.component.css']
})
export class NotificationFormComponent {

  notificationDetails: NotificationDetails;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private userService: WeatherServiceService) {
    this.notificationDetails = new NotificationDetails();
  }

  onSubmit() {
    this.userService.save(this.notificationDetails).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }
}