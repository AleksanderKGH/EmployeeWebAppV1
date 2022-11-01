import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-direct-report-list',
  templateUrl: './direct-report-list.component.html',
  styleUrls: ['./direct-report-list.component.css']
})
export class DirectReportListComponent implements OnInit {
  @Input() dirReps: number[];
  @Input() overseer: number;

  constructor() { }

  ngOnInit(): void {
    
  }
  

}
