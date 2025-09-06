import { Component } from '@angular/core';
import { Customers } from '../../models/student';
import { FormsModule } from '@angular/forms';   // ✅ Needed for ngModel
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-details2',
  imports: [FormsModule,CommonModule],
  templateUrl: './details2.html',
  styleUrl: './details2.css',
})
export class Details2 {
  customer?: Customers;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.customer = nav?.extras.state?.['customer'];
  }

  returnMainpage() {
    this.router.navigate(['/mainpage']); 
  }

}


