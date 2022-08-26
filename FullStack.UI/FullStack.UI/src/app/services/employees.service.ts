import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.model';
import { AddEmployeeComponent } from '../components/employees/add-employee/add-employee.component';
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
   
   baseApiUrl:string =environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
   return this.http.get<Employee[]>(this.baseApiUrl + '/api/employees');

  }
  addEmployee(addEmployeeRequest:Employee) : Observable<Employee> {
    addEmployeeRequest.id ='00000000-0000-0000-0000-000000000000'
    return this.http.post<Employee>(this.baseApiUrl + '/api/employees',addEmployeeRequest);
  }

  getEmployee(id : string) : Observable<Employee> {
    return this.http.get<Employee>(this.baseApiUrl + '/api/employees/'  + id);
  }
  uptadeEmployee(id : string, uptadeEmployeeRequest: Employee) : Observable<Employee> {
    return this.http.put<Employee>(this.baseApiUrl + '/api/employees/'  + id, uptadeEmployeeRequest )
  }

  deleteEmployee(id: string) : Observable<Employee> {
   return this.http.delete<Employee>(this.baseApiUrl + '/api/employees/'  + id );
  }
}
