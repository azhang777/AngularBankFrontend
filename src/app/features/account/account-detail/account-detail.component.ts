import { Component, OnInit } from '@angular/core';
import { Account } from '../../../shared/models/account';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../../../core/services/account.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrl: './account-detail.component.css',
})
export class AccountDetailComponent implements OnInit {
  id: number;
  accountData: Account;
  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = +params.get('id');

      this.accountService.getAccountById(this.id).subscribe({
        next: (value) => {
          console.log(JSON.stringify(value));
          this.accountData = value;
        },
        error: (error) => {
          console.error('Error', error);
        },
        complete: () => {
          console.log(`Get account of ${this.id} has been completed.`);
        },
      });
    });
  }
}
