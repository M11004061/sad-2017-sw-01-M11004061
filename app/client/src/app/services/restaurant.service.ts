import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RestaurantService{
    constructor(private http:Http){
        console.log('Restaurant Service Initialized...');
    }
    
    getRestaurants(){
        return this.http.get('http://localhost:3000/api/restaurants')
            .map(res => res.json());
    }
}

