import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-header',
	standalone: false,
	templateUrl: './header.html',
	styleUrl: './header.css'
})
export class Header {
	@Input({ required: true }) public navItems: { text: string; href: string }[] = [];
}
