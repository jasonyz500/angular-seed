import { Component, OnInit } from '@angular/core';
import { VisualizeBoxComponent } from './visualize-box.component'
import { WeeksService } from '../shared/weeks/weeks.service';

import * as moment from 'moment';

@Component({
  moduleId: module.id,
  selector: 'sd-visualize',
  templateUrl: 'visualize.component.html',
  styleUrls: ['visualize.component.css']
})

export class VisualizeComponent { 
  public startDate: any = moment().startOf('year'); // default to show year so far view
  public endDate: any = moment().endOf('year');
  weeks: any;

  constructor(public weeksService: WeeksService) {}
}
