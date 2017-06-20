import { Component, OnInit } from '@angular/core';
import { QuestionContainerComponent } from './question-container.component';
import { WeeksService } from '../shared/weeks/weeks.service';

import * as moment from 'moment';

@Component({
  moduleId: module.id,
  selector: 'sd-write',
  templateUrl: 'write.component.html',
  styleUrls: ['write.component.css'],
})
export class WriteComponent implements OnInit {

  week: any;
  selectedDay: {
    date: string,
    dayOfWeek: number
  } = {
    date: '',
    dayOfWeek: -1
  };

  constructor(public weeksService: WeeksService) {}

  ngOnInit() {
    let this_week = moment().startOf('isoWeek').format('YYYY-MM-DD');
    this.selectedDay.date = moment().format('dddd, MMMM Do');
    this.selectedDay.dayOfWeek = moment().day();
    this.populate(this_week);
  }

  getDisplayName(week_string: string): string {
    let endMonth = moment(week_string).endOf('isoWeek').month();
    let suffix = endMonth == moment(week_string).month() ? '' : endMonth;
    let prefix = moment().startOf('isoWeek').format('YYYY-MM-DD') == week_string ? 'This Week: ' : '';
    return `${prefix}${moment(week_string).format('MMMM Do')} - ${suffix} ${moment(week_string).endOf('isoWeek').format('Do')}`;
  }

  populate(week_string: string) {
    this.weeksService.get(week_string)
      .subscribe(
        week => this.week = week
      );
  }
}
