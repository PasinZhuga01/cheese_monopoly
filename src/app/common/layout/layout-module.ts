import { NgModule } from '@angular/core';

import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { ContentBox } from './components/content-box/content-box';

@NgModule({
	declarations: [],
	imports: [Header, Footer, ContentBox],
	exports: [Header, Footer, ContentBox]
})
export class LayoutModule {}
