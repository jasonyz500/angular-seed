import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { VisualizeComponent } from './visualize.component';
import { VisualizeBoxComponent } from './visualize-box.component';
import { VisualizeRoutingModule } from './visualize-routing.module';

@NgModule({
  imports: [CommonModule, SharedModule, VisualizeRoutingModule],
  declarations: [VisualizeComponent, VisualizeBoxComponent],
  exports: [VisualizeComponent, VisualizeBoxComponent]
})
export class VisualizeModule { }
