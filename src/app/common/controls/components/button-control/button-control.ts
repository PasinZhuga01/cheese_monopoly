import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-button-control',
	standalone: false,
	templateUrl: './button-control.html',
	styleUrl: './button-control.css'
})
export class ButtonControl {
	@Input({ required: true }) public type: 'button' | 'submit' = 'button';
	@Input({ required: true }) public text: string = '';

	@Input() public color: string = '#3bafda';

	@Output() public clicked: EventEmitter<'click'> = new EventEmitter();

	protected _getStyles(): { backgroundColor: string } {
		return { backgroundColor: this.color };
	}
}
