import { Component, OnInit, Input } from '@angular/core';

import { EmployeeService } from "../employee.service";

@Component({
  selector: 'app-direct-report-list',
  templateUrl: './direct-report-list.component.html',
  styleUrls: ['./direct-report-list.component.css']
})
export class DirectReportListComponent implements OnInit {
  @Input() dirReps: number[];
  @Input() overseer: number;

  constructor( private employeeService: EmployeeService,) { }

  ngOnInit(): void {
    
  }
  
  deleteRep(rep: number) {
    // Call employee service to delete this number from employees dirReps array
    // We would pass in the overseer and the rep
    // Filter the dirReps so it is removed from the array and can be re-rendered to the screen
    console.log(`Delete ${rep} from ${this.overseer}`)
  }

}
