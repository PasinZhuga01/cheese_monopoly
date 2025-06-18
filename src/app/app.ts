import { Component } from '@angular/core';
import { Header } from './common/components/header/header';
import { ContentBox } from './common/components/content-box/content-box';

@Component({
	selector: 'app-root',
	imports: [Header, ContentBox],
	templateUrl: './app.html',
	styleUrl: './app.css'
})
export class App {
	protected title = 'project';
}
