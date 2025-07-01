import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-text-control',
	standalone: false,
	templateUrl: './text-control.html',
	styleUrl: './text-control.css'
})
export class TextControl {
	@Input({ required: true }) public type: 'text' | 'password' | 'email' = 'text';

	@Input() public placeholder: string = '';
	@Input() public maxLength: number = 1000;
}
