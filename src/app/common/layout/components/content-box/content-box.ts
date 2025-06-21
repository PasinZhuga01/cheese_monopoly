import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-content-box',
	imports: [CommonModule],
	templateUrl: './content-box.html',
	styleUrl: './content-box.css'
})
export class ContentBox {
	@Input() public height: number | null = null;

	protected _getStyles(): { height: string } {
		return { height: this.height ? this.height + 'vh' : 'auto' };
	}
}
