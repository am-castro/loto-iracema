import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoloesComponent } from './boloes.component';

describe('BoloesComponent', () => {
  let component: BoloesComponent;
  let fixture: ComponentFixture<BoloesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoloesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoloesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
