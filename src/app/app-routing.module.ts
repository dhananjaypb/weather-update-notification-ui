import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsListComponent } from './details-list/details-list.component';
import { NotificationFormComponent } from './notification-form/notification-form.component';

const routes: Routes = [
  { path: 'users', component: DetailsListComponent },
  { path: 'adduser', component: NotificationFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
