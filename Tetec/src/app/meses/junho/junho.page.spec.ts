import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JunhoPage } from './junho.page';

describe('JunhoPage', () => {
  let component: JunhoPage;
  let fixture: ComponentFixture<JunhoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JunhoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JunhoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
