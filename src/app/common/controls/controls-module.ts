import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextControl } from './components/text-control/text-control';

@NgModule({
	declarations: [TextControl],
	imports: [CommonModule],
	exports: [TextControl]
})
export class ControlsModule {}
