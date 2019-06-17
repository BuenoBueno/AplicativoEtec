import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaioPage } from './maio.page';

describe('MaioPage', () => {
  let component: MaioPage;
  let fixture: ComponentFixture<MaioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
