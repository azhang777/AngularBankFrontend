import { Component, OnDestroy, OnInit } from '@angular/core';
import { CustomerService } from '../../core/services/customer.service';
import { Customer } from '../../shared/models/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
})
export class CustomerComponent implements OnInit {
  customers: Customer[] = [];
  columns = ['id', 'firstName', 'lastName', 'addresses'];
  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(
      (value) => (this.customers = value),
      (error) => console.error('Error:', error),
      () => {
        let previewCustomers: Customer[] = this.customers;
        console.log('Complete, fuck ' + JSON.stringify(previewCustomers));
      }
    );
  }
}
