import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rocket } from 'src/app/interfaces/rocket';
import { RocketService } from 'src/app/shared/rocket.service';

@Component({
  selector: 'app-rocket-details',
  templateUrl: './rocket-details.component.html',
  styleUrls: ['./rocket-details.component.css']
})
export class RocketDetailsComponent implements OnInit {

  id!: number;
  rocket: Rocket = {};

  constructor(private router: ActivatedRoute, private rocketService: RocketService, private route: Router) { }

  ngOnInit(): void {

    this.rocket = this.router.snapshot.data['rocket'];
  }

  backToRocketList(){
    this.route.navigate(['/rocket']);
  }
}
