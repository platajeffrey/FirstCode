import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { FormsModule } from '@angular/forms';   // ✅ Needed for ngModel
import { Customers } from '../models/student';
import { ApiService } from '../services/api.service';
import { Details } from './details/details';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, Details], 
  templateUrl: './mainpage.html',
  styleUrls: ['./mainpage.css'],
    
})
export class Mainpage {

  customers: Customers[] = [];

  isModalOpen = false;
  isEditMode: boolean = false; 
  isViewMode: boolean = false; 

  currentCustomer: Customers = { CustomerNo: '', Name: '', Contact: '' };
  newCustomer: Customers = {CustomerNo: '',Name: '',Contact: ''};

  constructor(private api: ApiService) {}

  ngOnInit(): void {

  
    this.api.getCustomers().subscribe({
      next: (res: Customers[]) => {
        this.customers = res;
        console.log(res);
      },
      error: (err) => {
        console.error('Error fetching customers:', err);
      }
    });
  }


  addCustomer() {
  this.api.addCustomer(this.currentCustomer).subscribe({
    next: (res: Customers) => {
      this.customers.push(res);  
      this.closeModal();
    },
    error: (err) => {
      console.error('Error adding customer:', err);
    }
  });
}

  deleteSelected() {
    const selectedIds = this.customers
      .filter(cus => cus.selected)
      .map(cus => cus.CustomerNo)   
      .join(','); 

      console.log(selectedIds)

    if (selectedIds) {
      this.api.deleteCustomers(selectedIds).subscribe({
        next: () => {
          this.customers = this.customers.filter(cus => !cus.selected);
        },
        error: (err) => {
          console.error('Error deleting customers:', err);
        }
      });
    }
  }

  updateCustomer(): void {
    this.api.updateCustomer(this.currentCustomer).subscribe({
      next: (res) => {
        const index = this.customers.findIndex(cus => cus.CustomerNo === this.currentCustomer.CustomerNo);
        this.customers[index] = res;  
        this.closeModal();  
      },
      error: (err) => {
        console.error('Error updating customer: ', err);
      }
    });
  }

  selectCustomer(customer: Customers) {
    this.currentCustomer = customer; // pass to <app-details>
  }

  openEditModal(customer: Customers): void {
    this.isEditMode = true;  
    this.isViewMode = false; 
    this.currentCustomer = { ...customer };  
    this.isModalOpen = true;  
  }

  openViewModal(customer: Customers): void {
    this.isEditMode = true;  
    this.isViewMode = false; 
    this.currentCustomer = { ...customer };  
    this.isModalOpen = true;  
  }

  toggleSelectAll(event: any) {
    const isChecked = event.target.checked;
    this.customers.forEach(cus => {
      cus.selected = isChecked;
    });
  }

  onSelectionChange() {
    
    const selectedCustomers = this.customers.filter(cus => cus.selected);
    console.log(selectedCustomers);  
  }

  openModal() {
    this.currentCustomer ={ CustomerNo: '', Name: '', Contact: '' }; 
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.isEditMode = false;
    this.isViewMode = false; 
    this.newCustomer = { CustomerNo: '', Name: '', Contact: '' }; 
  }

  hasSelectedCustomers(): boolean {
    return this.customers.some(cus => cus.selected);
  }
}
