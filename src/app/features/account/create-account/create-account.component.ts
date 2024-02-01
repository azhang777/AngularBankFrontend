import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Account } from '../../../shared/models/account';
import { AccountService } from '../../../core/services/account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css',
  imports: [ReactiveFormsModule, CommonModule],
})
export class CreateAccountComponent implements OnInit {
  customerId: number = 0;

  accountForm = this.formBuilder.group({
    customerId: [this.customerId],
    type: ['Checking'],
    balance: [0],
    nickname: ['New Account'],
    rewardPoints: [0],
  });

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.customerId = +params.get('id');
      this.accountForm.controls.customerId.setValue(this.customerId);
    });
  }

  onSubmit() {
    const newAccount = new Account(
      0,
      this.accountForm.value.customerId,
      this.accountForm.value.type,
      this.accountForm.value.balance,
      this.accountForm.value.nickname,
      this.accountForm.value.rewardPoints
    );

    this.accountService.createAccount(this.customerId, newAccount);

    this.router.navigate(['/customers']);
  }
}
