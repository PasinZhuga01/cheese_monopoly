import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing-module';
import { AuthPage } from './components/auth-page/auth-page';

@NgModule({
	declarations: [AuthPage],
	imports: [CommonModule, AuthRoutingModule]
})
export class AuthModule {}
