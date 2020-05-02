import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';
import { IDistrict } from '../shared/interfaces/IDistrict';
import { IState } from '../shared/interfaces/IState';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

/** Dashboard component class. */
export class DashboardComponent implements OnInit {
  stateData: IState[] = [];
  states: IState = {} as IState;
  selectedState: IState;

  /** Constructor that injects router. */
  constructor(private dataService: DataService) {
  }

  SetSelectedState(event: IState) {
    this.selectedState = event;
    window.scrollTo(0,0);
  }
  
ngOnInit(): void {
  this.dataService.getStateData().subscribe(
    states => {

      for (var state in states) {
        this.states = {} as IState;
        this.states.districtList = [];
        this.states.stateName = state as string;
        this.states.totalCases = 0;
        this.states.active = 0;
        this.states.recovered = 0;
        this.states.deceased = 0;

        for (let districtName in states[state as string].districtData) {

          var district = {} as IDistrict;
          district.districtName = (districtName as string);
          for (let status in states[state as string].districtData[districtName as string]) {
            if (<string>status === "active")
            district.active = states[state as string].districtData[districtName as string][status as string] as number;
            else if (<string>status === "recovered")
              district.recovered = states[state as string].districtData[districtName as string][status as string] as number;
            else if (<string>status === "deceased")
              district.deceased = states[state as string].districtData[districtName as string][status as string] as number;
          }
          district.totalCases =  district.active+  district.recovered +   district.deceased ;
          this.states.totalCases += district.totalCases;
          this.states.active += district.active;
          this.states.recovered += district.recovered;
          this.states.deceased += district.deceased;

          this.states.districtList.push(district);
        }
        this.stateData.push(this.states);
      }
    }
  );
}
}
