import { Component } from '@angular/core';
import {RestaurantService} from '../../services/restaurant.service';

@Component({
  moduleId: module.id,
  selector: 'restaurants',
  templateUrl: 'restaurants.component.html',
})
export class RestaurantsComponent  { 
    constructor(private restaurantService:RestaurantService) {
        this.restaurantService.getRestaurants()
            .subscribe(restaurants => {
                console.log(restaurants);
            });
    }   
}