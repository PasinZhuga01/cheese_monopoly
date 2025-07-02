import { Component, EventEmitter, Input, Output } from '@angular/core';

import { BaseControl } from '../base_control/base-control';

@Component({
	selector: 'app-button-control',
	standalone: false,
	templateUrl: './button-control.html',
	styleUrl: './button-control.css'
})
export class ButtonControl extends BaseControl {
	@Input({ required: true }) public type: 'button' | 'submit' = 'button';
	@Input({ required: true }) public text: string = '';

	@Output() public clicked: EventEmitter<'click'> = new EventEmitter();

	protected _getStyles(): { backgroundColor: string } {
		return { backgroundColor: this.color };
	}
}
