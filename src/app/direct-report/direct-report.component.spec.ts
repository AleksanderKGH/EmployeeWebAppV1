import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectReportComponent } from './direct-report.component';

const employeeServiceSpy = jasmine.createSpyObj("EmployeeService", [
  "get",
]);

describe('DirectReportComponent', () => {
  let component: DirectReportComponent;
  let fixture: ComponentFixture<DirectReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
