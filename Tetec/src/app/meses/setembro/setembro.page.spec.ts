import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetembroPage } from './setembro.page';

describe('SetembroPage', () => {
  let component: SetembroPage;
  let fixture: ComponentFixture<SetembroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetembroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetembroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
