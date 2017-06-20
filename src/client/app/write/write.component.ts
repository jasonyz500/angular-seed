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

  dt: Date = new Date();
  week: any;
  selectedDay: {
    displayName: string,
    dayOfWeek: number
  } = {
    displayName: moment().format('dddd, MMMM Do'),
    dayOfWeek: moment().day()
  };

  constructor(public weeksService: WeeksService) {}

  ngOnInit() {
    this.populate(moment());
  }

  changeDate(event: MouseEvent) {
    this.populate(moment(event));
  }

  getDisplayName(week_string: string): string {
    let endMonth = moment(week_string).endOf('isoWeek').month();
    let suffix = endMonth == moment(week_string).month() ? '' : endMonth;
    let prefix = moment().startOf('isoWeek').format('YYYY-MM-DD') == week_string ? 'This Week: ' : '';
    return `${prefix}${moment(week_string).format('MMMM Do')} - ${suffix} ${moment(week_string).endOf('isoWeek').format('Do')}`;
  }

  populate(date_moment: any) {
    let this_week = date_moment.clone().startOf('isoWeek').format('YYYY-MM-DD');
    this.weeksService.get(this_week)
      .subscribe(week => {
        this.week = week;
        this.selectedDay.displayName = date_moment.format('dddd, MMMM Do');
        this.selectedDay.dayOfWeek = date_moment.day();
      });
  }
}
