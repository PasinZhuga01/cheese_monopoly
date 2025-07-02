import { NgModule } from '@angular/core';

import { LayoutModule } from './layout/layout-module';
import { ControlsModule } from './controls/controls-module';

@NgModule({
	declarations: [],
	imports: [LayoutModule, ControlsModule],
	exports: [LayoutModule, ControlsModule]
})
export class CommonModule {}
