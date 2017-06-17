import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WriteComponent } from './write.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'write', component: WriteComponent }
    ])
  ],
  exports: [RouterModule]
})
export class WriteRoutingModule { }
