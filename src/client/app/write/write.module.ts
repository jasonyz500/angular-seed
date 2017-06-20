import { NgModule } from '@angular/core';

import { WriteComponent } from './write.component';
import { QuestionContainerComponent } from './question-container.component';
import { WriteRoutingModule } from './write-routing.module';
import { SharedModule } from '../shared/shared.module';
import { WeeksService } from '../shared/weeks/weeks.service';
import { ResponsesService } from '../shared/responses/responses.service';

@NgModule({
  imports: [WriteRoutingModule, SharedModule],
  declarations: [WriteComponent, QuestionContainerComponent],
  exports: [WriteComponent, QuestionContainerComponent],
  providers: [WeeksService, ResponsesService]
})
export class WriteModule { }
