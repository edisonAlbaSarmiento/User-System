import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = "http://localhost:3000/api";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${baseUrl}/employees`);
  }

  get(id) {
    return this.http.get(`${baseUrl}/employees/${id}`);
  }

  create(data) {
    return this.http.post(`${baseUrl}/employees/register-user`, data);
  }

  update(id, data) {
    return this.http.patch(`${baseUrl}/employees/update-user${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/employees/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  // findByTitle(title) {
  //   return this.http.get(`${baseUrl}?title=${title}`);
  // }
}
