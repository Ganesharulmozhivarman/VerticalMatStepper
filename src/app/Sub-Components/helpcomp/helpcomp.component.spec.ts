import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpcompComponent } from './helpcomp.component';

describe('HelpcompComponent', () => {
  let component: HelpcompComponent;
  let fixture: ComponentFixture<HelpcompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelpcompComponent]
    });
    fixture = TestBed.createComponent(HelpcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
