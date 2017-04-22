import { Component } from '@angular/core';
import {RestaurantService} from '../../services/restaurant.service';
import {Restaurant} from '../../../../Restaurant';

@Component({
  moduleId: module.id,
  selector: 'restaurants',
  templateUrl: 'restaurants.component.html',
})
export class RestaurantsComponent  {
    restaurants: Restaurant[];

    constructor(private restaurantService: RestaurantService) {
        this.restaurantService.getRestaurants()
            .subscribe(restaurants => {
                console.log(restaurants);
            });
    }
}