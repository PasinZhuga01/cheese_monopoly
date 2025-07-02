import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthContent } from './auth-content';

describe('AuthContent', () => {
  let component: AuthContent;
  let fixture: ComponentFixture<AuthContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
