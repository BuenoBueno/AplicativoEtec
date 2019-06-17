import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaComTarefaEProvaPage } from './dia-com-tarefa-eprova.page';

describe('DiaComTarefaEProvaPage', () => {
  let component: DiaComTarefaEProvaPage;
  let fixture: ComponentFixture<DiaComTarefaEProvaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaComTarefaEProvaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaComTarefaEProvaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
