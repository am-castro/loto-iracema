import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoloesFormComponent } from './boloes-form.component';

describe('BoloesFormComponent', () => {
  let component: BoloesFormComponent;
  let fixture: ComponentFixture<BoloesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoloesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoloesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
