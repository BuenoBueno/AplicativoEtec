import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DezembroPage } from './dezembro.page';

describe('DezembroPage', () => {
  let component: DezembroPage;
  let fixture: ComponentFixture<DezembroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DezembroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DezembroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
