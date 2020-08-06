import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../services/spacex.service';
import { Launch } from '../models/launch';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { $ } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: Launch[]
  launch_year: string
  launch_success: boolean
  land_success: boolean
  dataLoaded: boolean = false
  noData: boolean = false

  constructor(private spacexService: SpacexService, private location: Location, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    let urlParams = "?limit=100"

    if(this.route.snapshot.queryParamMap.get("launch_year")){
      this.launch_year = this.route.snapshot.queryParamMap.get("launch_year")
      urlParams += "&launch_year="+this.launch_year
      document.querySelector(`a[data-filterByYear='${this.launch_year}']`).classList.add('selected');
    }

    if(this.route.snapshot.queryParamMap.get("launch_success")){
      if(this.route.snapshot.queryParamMap.get("launch_success")=="true"){
        this.launch_success = true
      }else{
        this.launch_success = false
      }
      urlParams += "&launch_success="+this.launch_success
      document.querySelector(`a[data-filterByLaunchSuccess='${this.launch_success}']`).classList.add('selected');
    }

    if(this.route.snapshot.queryParamMap.get("land_success")){
      if(this.route.snapshot.queryParamMap.get("land_success")=="true"){
        this.land_success = true
      }else{
        this.land_success = false
      }
      urlParams += "&land_success="+this.land_success
      document.querySelector(`a[data-filterByLandSuccess='${this.land_success}']`).classList.add('selected');
    }

    if(urlParams=="?limit=100"){
      this.location.go(urlParams);
    }

    this.getLaunches(urlParams)
  }

  filterByYear(year,event){  
    if(document.getElementById('filterByYear').querySelector("a.selected")!=null){
      document.getElementById('filterByYear').querySelector("a.selected").classList.remove("selected");
    }  

    event.target.classList.add('selected');

    this.launch_year = year
    let urlParams = `?limit=100&launch_year=${this.launch_year}`

    if(typeof this.launch_success!='undefined'){
      urlParams += `&launch_success=${this.launch_success}`
    }

    if(typeof this.land_success!='undefined'){
      urlParams += `&land_success=${this.land_success}`
    }

    this.location.go(urlParams);
    this.getLaunches(urlParams)
  }

  filterByLaunchSuccess(launch_success,event){
    if(document.getElementById('filterByLaunchSuccess').querySelector("a.selected")!=null){
      document.getElementById('filterByLaunchSuccess').querySelector("a.selected").classList.remove("selected");
    }  
    
    event.target.classList.add('selected');

    this.launch_success = launch_success
    let urlParams = `?limit=100&launch_success=${this.launch_success}`

    if(typeof this.launch_year!='undefined'){
      urlParams += `&launch_year=${this.launch_year}`
    }

    if(typeof this.land_success!='undefined'){
      urlParams += `&land_success=${this.land_success}`
    }

    this.location.go(urlParams);
    this.getLaunches(urlParams)
  }

  filterByLandSuccess(land_success,event){
    if(document.getElementById('filterByLandSuccess').querySelector("a.selected")!=null){
      document.getElementById('filterByLandSuccess').querySelector("a.selected").classList.remove("selected");
    }  
    
    event.target.classList.add('selected');

    this.land_success = land_success
    let urlParams = `?limit=100&land_success=${this.land_success}`

    if(typeof this.launch_success!='undefined'){
      urlParams += `&launch_success=${this.launch_success}`
    }

    if(typeof this.launch_year!='undefined'){
      urlParams += `&launch_year=${this.launch_year}`
    }

    this.location.go(urlParams);
    this.getLaunches(urlParams)
  }

  getLaunches(params){
    this.spacexService.getLaunces(params)
    .subscribe((data: Launch[]) => {
      console.log('data:',data)
      this.dataLoaded = true
      this.data = data
      if(data.length==0){
        this.noData = true
      }else{
        this.noData = false
      }
    });
  }

}
