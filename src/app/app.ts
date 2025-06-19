import { Component } from '@angular/core';
import { Header } from './common/components/header/header';
import { ContentBox } from './common/components/content-box/content-box';
import { Footer } from './common/components/footer/footer';

@Component({
	selector: 'app-root',
	imports: [Header, ContentBox, Footer],
	templateUrl: './app.html',
	styleUrl: './app.css'
})
export class App {
	protected title = 'project';
}
