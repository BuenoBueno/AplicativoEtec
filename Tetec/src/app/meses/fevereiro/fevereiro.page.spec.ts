import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FevereiroPage } from './fevereiro.page';

describe('FevereiroPage', () => {
  let component: FevereiroPage;
  let fixture: ComponentFixture<FevereiroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FevereiroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FevereiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
