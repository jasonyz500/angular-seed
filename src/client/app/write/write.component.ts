import { Component, OnInit } from '@angular/core';
import { QuestionContainerComponent } from './question-container.component';
import { WeeksService } from '../shared/weeks/weeks.service';

import moment from 'moment';

@Component({
  moduleId: module.id,
  selector: 'sd-write',
  templateUrl: 'write.component.html',
  styleUrls: ['write.component.css'],
})
export class WriteComponent implements OnInit {

  week: object;

  constructor(public weeksService: WeeksService) {}

  ngOnInit() {
    this.populate();
  }

  populate() {
    this.weeksService.get('2017-06-19')
      .subscribe(
        week => this.week = week
      );
  }
}
