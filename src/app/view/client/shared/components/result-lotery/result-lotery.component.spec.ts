import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultLoteryComponent } from './result-lotery.component';

describe('ResultLoteryComponent', () => {
  let component: ResultLoteryComponent;
  let fixture: ComponentFixture<ResultLoteryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultLoteryComponent]
    });
    fixture = TestBed.createComponent(ResultLoteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
