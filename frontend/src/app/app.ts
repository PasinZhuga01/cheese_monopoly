import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from './common/common-module';

@Component({
	selector: 'app-root',
	imports: [CommonModule, RouterOutlet],
	templateUrl: './app.html',
	styleUrl: './app.css'
})
export class App {}
