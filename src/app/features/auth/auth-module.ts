import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing-module';
import { AuthPage } from './components/auth-page/auth-page';

import { CommonModule } from '../../common/common-module';
import { AuthContent } from './components/auth-content/auth-content';

@NgModule({
	declarations: [AuthPage, AuthContent],
	imports: [AngularCommonModule, AuthRoutingModule, CommonModule]
})
export class AuthModule {}
