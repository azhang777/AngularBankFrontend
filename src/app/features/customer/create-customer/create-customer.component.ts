import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Account } from '../../../shared/models/account';
import { AccountService } from '../../../core/services/account.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrl: './create-customer.component.css',
  imports: [ReactiveFormsModule, CommonModule],
})
export class CreateCustomerComponent implements OnInit {
  customerForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this.formBuilder.array([this.formBuilder.control('')]),
  });

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {}

  updateName() {
    const number = Math.random() * 100000;
    console.log('Test');
    this.customerForm.controls.firstName.setValue(number.toString());
    this.customerForm.controls.lastName.setValue(number.toString());
  }

  updateProfile() {
    this.customerForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew  Street',
      },
    });
  }

  get aliases() {
    return this.customerForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.formBuilder.control(''));
  }

  removeAlias() {
    this.aliases.removeAt(this.aliases.controls.length - 1);
  }

  onSubmit() {
    console.warn(this.customerForm.value);
  }
}
