import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from './pipes/truncate.pipe';
import { RelativeTimePipe } from './pipes/relative-time.pipe';
import { FormateDatePipe } from './pipes/formate-date.pipe';



@NgModule({
  declarations: [
    TruncatePipe,
    RelativeTimePipe,
    FormateDatePipe
  ],
  exports: [
    TruncatePipe,
    RelativeTimePipe
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
