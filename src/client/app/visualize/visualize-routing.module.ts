import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VisualizeComponent } from './visualize.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'visualize', component: VisualizeComponent }
    ])
  ],
  exports: [RouterModule]
})
export class VisualizeRoutingModule { }
