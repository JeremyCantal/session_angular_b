import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rocket } from 'src/app/interfaces/rocket';
import { RocketService } from 'src/app/shared/rocket.service';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css']
})
export class RocketComponent implements OnInit {

  rocket : Rocket = {};
  rockets: Array<Rocket> = new Array<Rocket>();

  constructor(private router: Router, private rocketService: RocketService, private route: ActivatedRoute) { }

  

  ngOnInit(): void {
    this.reloadResolve();
  }

  saveRocket(){
    this.rocketService.addRocket(this.rocket).subscribe(data => {
      console.log(data);
      this.reloadResolve();
    })
  }

  reloadResolve() {
    this.router.navigated = false;
    this.router.navigate([this.router.url]).then(() => {
      this.rockets = this.route.snapshot.data.routeResolver;
    });
  }

  rocketDetails(id: any){
    this.router.navigate(['details', id]);
  }

  rocketEdit(id: any){
    this.router.navigate(['edit', id]);
  }

  deleteRocket(id: any) {
    this.rocketService.deleteRocket(id).subscribe(data => {
      console.log(data);
      this.reloadResolve();
    })
  }
}
