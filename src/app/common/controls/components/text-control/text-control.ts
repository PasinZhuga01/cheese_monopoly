import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-text-control',
	standalone: false,
	templateUrl: './text-control.html',
	styleUrl: './text-control.css'
})
export class TextControl {
	@Input() public placeholder: string = '';
	@Input() public maxLength: number = Infinity;
}
