import { Component } from '@angular/core';
import { RestaurantService } from './services/restaurant.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers:[RestaurantService]
})
export class AppComponent  { }