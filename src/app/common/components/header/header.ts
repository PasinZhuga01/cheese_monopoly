import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-header',
	imports: [CommonModule],
	templateUrl: './header.html',
	styleUrl: './header.css'
})
export class Header {
	@Input({ required: true }) public navItems: { text: string; href: string }[] = [];
}
