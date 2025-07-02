import { Component, Input } from '@angular/core';

import { TextControl } from '../../../../common/controls/components/text-control/text-control';

@Component({
	selector: 'app-auth-form',
	standalone: false,
	templateUrl: './auth-form.html',
	styleUrl: './auth-form.css'
})
export class AuthForm {
	@Input({ required: true }) public header: string = '';
	@Input({ required: true }) public description: string = '';
	@Input({ required: true }) public submitText: string = '';

	@Input({ required: true }) public controls: { name: string; title: string; type: TextControl['type'] }[] = [];
}
