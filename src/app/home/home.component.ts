import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../services/spacex.service';
import { Launch } from '../models/launch';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: Launch[];
  launchYear: string;
  launchSuccess: boolean;
  landSuccess: boolean;
  dataLoaded = false;
  noData = false;

  constructor(private spacexService: SpacexService, private location: Location, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    let urlParams = '?limit=100';

    if (this.route.snapshot.queryParamMap.get('launch_year')) {
      this.launchYear = this.route.snapshot.queryParamMap.get('launch_year');
      urlParams += '&launch_year=' + this.launchYear;
      document.querySelector(`a[data-filterByYear='${this.launchYear}']`).classList.add('selected');
    }

    if (this.route.snapshot.queryParamMap.get('launch_success')) {
      if (this.route.snapshot.queryParamMap.get('launch_success') === 'true') {
        this.launchSuccess = true;
      } else {
        this.launchSuccess = false;
      }
      urlParams += '&launch_success=' + this.launchSuccess;
      document.querySelector(`a[data-filterByLaunchSuccess='${this.launchSuccess}']`).classList.add('selected');
    }

    if (this.route.snapshot.queryParamMap.get('land_success')) {
      if (this.route.snapshot.queryParamMap.get('land_success') === 'true') {
        this.landSuccess = true;
      } else {
        this.landSuccess = false;
      }
      urlParams += '&land_success=' + this.landSuccess;
      document.querySelector(`a[data-filterByLandSuccess='${this.landSuccess}']`).classList.add('selected');
    }

    if (urlParams === '?limit=100') {
      this.location.go(urlParams);
    }

    this.getLaunches(urlParams);
  }

  filterByYear(year, event) {
    if (document.getElementById('filterByYear').querySelector('a.selected') !== null) {
      document.getElementById('filterByYear').querySelector('a.selected').classList.remove('selected');
    }

    event.target.classList.add('selected');

    this.launchYear = year;
    let urlParams = `?limit=100&launch_year=${this.launchYear}`;

    if (typeof this.launchSuccess !== 'undefined') {
      urlParams += `&launch_success=${this.launchSuccess}`;
    }

    if (typeof this.landSuccess !== 'undefined') {
      urlParams += `&land_success=${this.landSuccess}`;
    }

    this.location.go(urlParams);
    this.getLaunches(urlParams);
  }

  filterByLaunchSuccess(launchSuccess, event) {
    if (document.getElementById('filterByLaunchSuccess').querySelector('a.selected') !== null) {
      document.getElementById('filterByLaunchSuccess').querySelector('a.selected').classList.remove('selected');
    }

    event.target.classList.add('selected');

    this.launchSuccess = launchSuccess;
    let urlParams = `?limit=100&launch_success=${this.launchSuccess}`;

    if (typeof this.launchYear !== 'undefined') {
      urlParams += `&launch_year=${this.launchYear}`;
    }

    if (typeof this.landSuccess !== 'undefined') {
      urlParams += `&land_success=${this.landSuccess}`;
    }

    this.location.go(urlParams);
    this.getLaunches(urlParams);
  }

  filterByLandSuccess(landSuccess, event) {
    if (document.getElementById('filterByLandSuccess').querySelector('a.selected') !== null) {
      document.getElementById('filterByLandSuccess').querySelector('a.selected').classList.remove('selected');
    }

    event.target.classList.add('selected');

    this.landSuccess = landSuccess;
    let urlParams = `?limit=100&land_success=${this.landSuccess}`;

    if (typeof this.launchSuccess !== 'undefined') {
      urlParams += `&launch_success=${this.launchSuccess}`;
    }

    if (typeof this.launchYear !== 'undefined') {
      urlParams += `&launch_year=${this.launchYear}`;
    }

    this.location.go(urlParams);
    this.getLaunches(urlParams);
  }

  getLaunches(params) {
    this.spacexService.getLaunces(params)
    .subscribe((data: Launch[]) => {
      console.log('data:', data);
      this.dataLoaded = true;
      this.data = data;
      if (data.length === 0) {
        this.noData = true;
      } else {
        this.noData = false;
      }
    });
  }

}
