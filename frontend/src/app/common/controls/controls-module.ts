import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextControl } from './components/text-control/text-control';
import { ButtonControl } from './components/button-control/button-control';

@NgModule({
	declarations: [TextControl, ButtonControl],
	imports: [CommonModule],
	exports: [TextControl, ButtonControl]
})
export class ControlsModule {}
