import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperflowComponent } from './stepperflow.component';

describe('StepperflowComponent', () => {
  let component: StepperflowComponent;
  let fixture: ComponentFixture<StepperflowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepperflowComponent]
    });
    fixture = TestBed.createComponent(StepperflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
