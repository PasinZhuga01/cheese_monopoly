import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { ContentBox } from './components/content-box/content-box';
import { ContentSection } from './components/content-section/content-section';

@NgModule({
	declarations: [Header, Footer, ContentBox, ContentSection],
	imports: [CommonModule],
	exports: [Header, Footer, ContentBox, ContentSection]
})
export class LayoutModule {}
