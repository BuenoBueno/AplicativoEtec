import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgostoPage } from './agosto.page';

describe('AgostoPage', () => {
  let component: AgostoPage;
  let fixture: ComponentFixture<AgostoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgostoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgostoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
