import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JaneiroPage } from './janeiro.page';

describe('JaneiroPage', () => {
  let component: JaneiroPage;
  let fixture: ComponentFixture<JaneiroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JaneiroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JaneiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
