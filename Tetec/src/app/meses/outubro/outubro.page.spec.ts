import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutubroPage } from './outubro.page';

describe('OutubroPage', () => {
  let component: OutubroPage;
  let fixture: ComponentFixture<OutubroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutubroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutubroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
