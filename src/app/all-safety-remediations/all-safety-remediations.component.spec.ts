import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSafetyRemediationsComponent } from './all-safety-remediations.component';

describe('AllSafetyRemediationsComponent', () => {
  let component: AllSafetyRemediationsComponent;
  let fixture: ComponentFixture<AllSafetyRemediationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSafetyRemediationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSafetyRemediationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
