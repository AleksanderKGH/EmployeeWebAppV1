import { Component, OnInit, Input } from "@angular/core";

import { MatDialog } from "@angular/material/dialog";

import { EmployeeService } from "../employee.service";
import { Employee } from "../employee";

@Component({
  selector: "app-direct-report",
  templateUrl: "./direct-report.component.html",
  styleUrls: ["./direct-report.component.css"],
})
export class DirectReportComponent implements OnInit {
  @Input() rep: number;
  employee: Employee;
  errorMessage: string;

  constructor(
    private employeeService: EmployeeService,
    public editMenu: MatDialog,
    public deleteMenu: MatDialog
  ) {}

  openEditMenu(): void {
    const editRef = this.editMenu.open(editMenuContent);
    console.log("Edit");
  }
  openDeleteMenu(): void {
    const deleteRef = this.deleteMenu.open(deleteMenuContent);
    console.log("Delete");
  }

  // Need to call service here to fill an employee, then we can safely display their data
  ngOnInit(): void {
    this.employeeService.get(this.rep).subscribe(
      (emp: Employee) =>
        (this.employee = {
          id: emp.id,
          firstName: emp.firstName,
          lastName: emp.lastName,
          position: emp.position,
          compensation: emp.compensation,
        })
    );
  }

}

@Component({
  selector: 'edit-menu',
  templateUrl: 'edit-menu.html',
})
export class editMenuContent { }

@Component({
  selector: 'delete-menu',
  templateUrl: 'delete-menu.html',
})
export class deleteMenuContent {}
