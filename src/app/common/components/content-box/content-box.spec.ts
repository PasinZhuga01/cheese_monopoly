import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBox } from './content-box';

describe('ContentBox', () => {
  let component: ContentBox;
  let fixture: ComponentFixture<ContentBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
