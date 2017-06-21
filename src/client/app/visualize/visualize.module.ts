import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { VisualizeComponent } from './visualize.component';
import { VisualizeRoutingModule } from './visualize-routing.module';

@NgModule({
  imports: [CommonModule, SharedModule, VisualizeRoutingModule],
  declarations: [VisualizeComponent],
  exports: [VisualizeComponent]
})
export class VisualizeModule { }
