import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JulhoPage } from './julho.page';

describe('JulhoPage', () => {
  let component: JulhoPage;
  let fixture: ComponentFixture<JulhoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JulhoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JulhoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
