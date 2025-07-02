import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-content-box',
	standalone: false,
	templateUrl: './content-box.html',
	styleUrl: './content-box.css'
})
export class ContentBox {
	@Input() public height: number | null = null;

	protected _getStyles(): { height: string } {
		return { height: this.height ? this.height + 'vh' : 'auto' };
	}
}
