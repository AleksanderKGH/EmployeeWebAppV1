import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectReportListComponent } from './direct-report-list.component';

describe('DirectReportListComponent', () => {
  let component: DirectReportListComponent;
  let fixture: ComponentFixture<DirectReportListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectReportListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
