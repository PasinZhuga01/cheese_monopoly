import { Directive, Input } from '@angular/core';

@Directive()
export abstract class BaseControl {
	@Input() public color: string = 'var(--input-color)';
	@Input() public identificator: string = '';
}
