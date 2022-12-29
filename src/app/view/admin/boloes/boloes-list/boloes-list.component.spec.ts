import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoloesListComponent } from './boloes-list.component';

describe('BoloesListComponent', () => {
  let component: BoloesListComponent;
  let fixture: ComponentFixture<BoloesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoloesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoloesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
