import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentList } from '../models/student';


@Component({
  selector: 'app-studentinfo',
  imports: [CommonModule],
  templateUrl: './studentinfo.html',
  styleUrl: './studentinfo.css',
})
export class Studentinfo {
  
  studentId!: number;
  student?: StudentList;

  students: StudentList[] = [
    {
      sno: 1,
      name: 'Alice Johnson',
      course: 'BCSA',
      gender: 'Female',
      age: '21',
      contact: '123-456-7890',
      address: '123 Main St, City A',
      email: 'alice@example.com',
      birthday: '2003-01-15',
      motto: 'Keep learning!'
    },
    {
      sno: 2,
      name: 'Brian Smith',
      course: 'HRM',
      gender: 'Male',
      age: '22',
      contact: '234-567-8901',
      address: '456 Park Ave, City B',
      email: 'brian@example.com',
      birthday: '2002-03-20',
      motto: 'Work hard, play hard.'
    },
    {
      sno: 3,
      name: 'Catherine Lee',
      course: 'BSA',
      gender: 'Female',
      age: '23',
      contact: '345-678-9012',
      address: '789 Lake Rd, City C',
      email: 'catherine@example.com',
      birthday: '2001-07-08',
      motto: 'Numbers tell the truth.'
    },
    {
      sno: 4,
      name: 'David Kim',
      course: 'BSBA',
      gender: 'Male',
      age: '21',
      contact: '456-789-0123',
      address: '321 Hill St, City D',
      email: 'david@example.com',
      birthday: '2003-09-25',
      motto: 'Business is people.'
    },
    {
      sno: 5,
      name: 'Ella Brown',
      course: 'BSE',
      gender: 'Female',
      age: '22',
      contact: '567-890-1234',
      address: '654 River Rd, City E',
      email: 'ella@example.com',
      birthday: '2002-11-02',
      motto: 'Engineering the future.'
    },
    {
      sno: 6,
      name: 'Frank Green',
      course: 'BCSA',
      gender: 'Male',
      age: '23',
      contact: '678-901-2345',
      address: '987 Sunset Blvd, City F',
      email: 'frank@example.com',
      birthday: '2001-05-18',
      motto: 'Code is poetry.'
    },
    {
      sno: 7,
      name: 'Grace White',
      course: 'HRM',
      gender: 'Female',
      age: '20',
      contact: '789-012-3456',
      address: '159 Maple St, City G',
      email: 'grace@example.com',
      birthday: '2004-04-10',
      motto: 'People matter most.'
    },
    {
      sno: 8,
      name: 'Henry Adams',
      course: 'BSA',
      gender: 'Male',
      age: '22',
      contact: '890-123-4567',
      address: '753 Oak St, City H',
      email: 'henry@example.com',
      birthday: '2002-12-30',
      motto: 'Think logically.'
    },
    {
      sno: 9,
      name: 'Ivy Walker',
      course: 'BSBA',
      gender: 'Female',
      age: '21',
      contact: '901-234-5678',
      address: '852 Pine Rd, City I',
      email: 'ivy@example.com',
      birthday: '2003-06-05',
      motto: 'Lead with vision.'
    }
  ];


  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.studentId = Number(this.route.snapshot.paramMap.get('sno'));
    this.student = this.students.find(s => s.sno === this.studentId);
  }

  goBack() {
    console.log("here")
    this.router.navigate(['/mainpage']);
  }
}
