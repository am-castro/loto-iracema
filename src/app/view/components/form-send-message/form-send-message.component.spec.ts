import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSendMessageComponent } from './form-send-message.component';

describe('FormSendMessageComponent', () => {
  let component: FormSendMessageComponent;
  let fixture: ComponentFixture<FormSendMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSendMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSendMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
