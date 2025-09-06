import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Customers } from '../models/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.baseUrl;
  private localUrl = 'https://localhost:44313/api/customer';

  constructor(private http: HttpClient) {}

  // Example: get customer list
  getCustomers() : Observable<Customers[]>{
    return this.http.get<Customers[]>(`${this.baseUrl}/${environment.list}`);
  }

  addCustomer(customer: Customers): Observable<Customers> {
    return this.http.post<Customers>(`${environment.baseUrl}/${environment.add}`, customer);
  }

  updateCustomer(customer: Customers): Observable<Customers> {
    return this.http.post<Customers>(`${environment.baseUrl}/${environment.update}`, customer);
  }

    // Method to delete selected customers
  deleteCustomers(customerIds: string): Observable<any> {
    const url = `${environment.baseUrl}/${environment.delete}${customerIds}`;
    return this.http.post(url, {});
  }

  getCustomerById(id: string): Observable<Customers> {
    return this.http.get<Customers>(`${this.localUrl}/GetCustomer/${id}`);
  }
}
