import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { EmployeeService} from '../shared/employee.service';
import { Employee } from '../shared/employee.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [EmployeeService]
})
export class DashboardComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }
 

  ngOnInit() {
this.refreshEmployeeList();
  }

  refreshEmployeeList() {
    this.employeeService.getEmployeeList().subscribe((res) => {
      this.employeeService.employees = res as Employee[];
    });
  }
}
