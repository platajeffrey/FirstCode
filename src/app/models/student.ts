export interface StudentID {
    sno: number
    name: string;
    course: string;
}

  export interface StudentList {
    sno: number
    name: string;
    course: string;
    gender: string
    age: string;
    contact: string;
    address: string;
    email: string;
    birthday: string;
    motto: string;
  }

  export interface Customers {
    CustomerNo: string
    Name: string;
    Contact: string;
    selected?: boolean;
}