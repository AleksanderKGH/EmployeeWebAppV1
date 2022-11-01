import { CurrencyPipe } from "@angular/common";
import { Component, Input } from "@angular/core";

import { Employee } from "../employee";


@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"],
})
export class EmployeeComponent {
  @Input() employee: Employee;
  count: number;
  directReps: Employee[] = [];

  constructor() {}

  ngOnInit(): void {

    // No Directs
    if (this.employee.directReports === undefined) {
      this.count = 0;
    }
    // Directs Exist
    else {
      this.count = this.employee.directReports.length;
    }
  }
}
