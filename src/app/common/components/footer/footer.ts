import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-footer',
	imports: [CommonModule],
	templateUrl: './footer.html',
	styleUrl: './footer.css'
})
export class Footer {
	@Input() public contacts: { name: string; value: string; href: string }[] = [];
}
