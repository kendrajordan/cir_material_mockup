import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySafetyRemediationsComponent } from './my-safety-remediations.component';

describe('MySafetyRemediationsComponent', () => {
  let component: MySafetyRemediationsComponent;
  let fixture: ComponentFixture<MySafetyRemediationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySafetyRemediationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySafetyRemediationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
