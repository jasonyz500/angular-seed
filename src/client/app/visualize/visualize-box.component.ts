import { Component, Input } from '@angular/core';

import * as moment from 'moment';

@Component({
  moduleId: module.id,
  selector: 'visualize-box',
  templateUrl: 'visualize-box.component.html',
  styleUrls: ['visualize-box.component.css']
})

export class VisualizeBoxComponent {
  @Input() week: any;
}
