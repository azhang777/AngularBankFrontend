import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../shared/models/customer';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../../core/services/customer.service';
import { Address } from '../../../shared/models/address';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrl: './customer-detail.component.css',
})

//each component should be self-sufficient, a component should not rely on other components to get information / data.
// in this case, when we go from the customer list to customer component, all we need should be the id of the route to get the single customer.

//your service should be a state manager, not other components
export class CustomerDetailComponent implements OnInit {
  id: number;
  customerData: Customer;
  address: Address[];
  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService
  ) {}

  //do not have two asyncs rely on eachother in separation. If one async needs something from another async, have it in the observable chain

  /*
A callback function is a function that is passed as an argument to another function and is intended to be 
called after some specific event or condition occurs. In other words, a callback is a piece of executable code 
that is passed as an argument to another function, with the expectation that it will be called later, usually asynchronously.
  */

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = +params.get('id');

      this.customerService.getCustomerById(this.id).subscribe({
        next: (value) => {
          this.customerData = value;
          this.address = this.customerData?.addresses;
          console.log(JSON.stringify(this.customerData));
        },
        error: (error) => {
          console.error('Error', error);
        },
        complete: () => {
          console.log(`Get customer of ${this.id} has been completed.`);
        },
      });
    });
  }
  /*
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = +params.get('id');
    });

    this.customerService.getCustomerById(this.id).subscribe({
      next: (value) => {
        this.customerData = value;
        this.address = this.customerData?.addresses;
        console.log(JSON.stringify(this.customerData));
      },
      error: (error) => {
        console.error('Error', error);
      },
      complete: () => {
        console.log(`Get customer of ${this.id} has been completed.`);
      },
    });
  }
*/

  //this.customerService.getCustomerById(this.id)... could get executed before the first async paramMap.subscribe.
  //In that event, id would be null which is bad. So lets have the second function as a callback to the first one.
  //After the first one's logic executes, the callback will be used.
}
