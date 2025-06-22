import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-footer',
	standalone: false,
	templateUrl: './footer.html',
	styleUrl: './footer.css'
})
export class Footer {
	@Input() public contacts: { name: string; value: string; href: string }[] = [];
}
