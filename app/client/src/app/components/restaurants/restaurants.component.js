"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var restaurant_service_1 = require('../../services/restaurant.service');
var RestaurantsComponent = (function () {
    function RestaurantsComponent(restaurantService) {
        this.restaurantService = restaurantService;
        this.restaurantService.getRestaurants()
            .subscribe(function (restaurants) {
            console.log(restaurants);
        });
    }
    RestaurantsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'restaurants',
            templateUrl: 'restaurants.component.html',
        }), 
        __metadata('design:paramtypes', [restaurant_service_1.RestaurantService])
    ], RestaurantsComponent);
    return RestaurantsComponent;
}());
exports.RestaurantsComponent = RestaurantsComponent;
//# sourceMappingURL=restaurants.component.js.map