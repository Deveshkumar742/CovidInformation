import { Component, OnInit, Input } from '@angular/core';
import { IState } from 'src/app/shared/interfaces/IState';

@Component({
  selector: 'app-districtview',
  templateUrl: './districtview.component.html',
  styleUrls: ['./districtview.component.css']
})
export class DistrictviewComponent implements OnInit {

  @Input() state:IState;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges() {
    // create header using child_id
    console.log(this.state.districtList[0].districtName);
  }
}
