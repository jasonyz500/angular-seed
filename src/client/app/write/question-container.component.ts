import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ResponsesService } from '../shared/responses/responses.service';
import { Response } from './response';
import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
  moduleId: module.id,
  selector: 'question-container',
  templateUrl: 'question-container.component.html',
  styleUrls: ['question-container.component.css'],
})
export class QuestionContainerComponent implements OnInit {
  @Input() response: Response;
  responseForm: FormGroup;

  constructor(private fb: FormBuilder, public responsesService: ResponsesService){
    this.fb = fb;
  }

  ngOnInit() {
    this.createForm();
    let _this = this;
    this.responseForm.valueChanges.subscribe(_.debounce((val: any) => _this.autosave(val), 1500));
  }

  createForm() {
    this.responseForm = this.fb.group({
      body: this.response.body
    });
  }

  autosave(val: any) {
    this.response.body = val.body;
    this.response.last_save_time = moment().unix();
    this.responsesService.update(this.response)
      .subscribe(
        resp => console.log(resp)
      );
  }
}
