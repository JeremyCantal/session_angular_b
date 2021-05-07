import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Rocket } from '../interfaces/rocket';
import { RocketService } from '../shared/rocket.service';

@Injectable({
  providedIn: 'root'
})
export class RocketResolver implements Resolve<Rocket[]> {

  constructor(private rocketService: RocketService, private route: Router) { }

  resolve(): Observable<any> {
    return this.rocketService.getAllRockets()
      .pipe(map(res => {
        if (res) {
          console.log(res);
          return res;
        } else {
          console.log('redirecting');
          this.route.navigate(['error'], {skipLocationChange: true});
          return null
        }
      }));
  }
}
