import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbrilPage } from './abril.page';

describe('AbrilPage', () => {
  let component: AbrilPage;
  let fixture: ComponentFixture<AbrilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbrilPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbrilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
