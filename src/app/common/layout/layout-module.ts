import { NgModule } from '@angular/core';

import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { ContentBox } from './components/content-box/content-box';
import { ContentSection } from './components/content-section/content-section';

@NgModule({
	declarations: [],
	imports: [Header, Footer, ContentBox, ContentSection],
	exports: [Header, Footer, ContentBox, ContentSection]
})
export class LayoutModule {}
