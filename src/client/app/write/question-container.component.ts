import { Component, Input } from '@angular/core';
import * as _ from 'lodash';
import moment from 'moment';

@Component({
  moduleId: module.id,
  selector: 'question-container',
  templateUrl: 'question-container.component.html',
  styleUrls: ['question-container.component.css'],
})
export class QuestionContainerComponent {
  @Input() response: any;

  handleChange() {
    console.log('changed');
    // _.debounce(this.videoSearch(this.responses), 300);
  }
}
