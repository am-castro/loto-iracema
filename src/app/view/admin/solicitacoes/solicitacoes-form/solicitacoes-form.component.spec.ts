import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacoesFormComponent } from './solicitacoes-form.component';

describe('SolicitacoesFormComponent', () => {
  let component: SolicitacoesFormComponent;
  let fixture: ComponentFixture<SolicitacoesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitacoesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitacoesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
