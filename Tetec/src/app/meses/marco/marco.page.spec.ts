import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcoPage } from './marco.page';

describe('MarcoPage', () => {
  let component: MarcoPage;
  let fixture: ComponentFixture<MarcoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
