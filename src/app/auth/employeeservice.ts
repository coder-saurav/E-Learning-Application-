import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { observable, Observable } from "rxjs";
import { Employee } from "./employee";
import { Loginemployee } from "./login/loginemployee";

@Injectable({
  providedIn: "root"
})
export class EmplyeeserviceService {
  url = "http://localhost:64191"; /*http://localhost:54868 64191/ */
  constructor(private http: HttpClient) {}
  createemployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.url + "api/Employeemasters", employee);
  }
}
