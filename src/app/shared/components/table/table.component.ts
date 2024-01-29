import { Component, Input } from '@angular/core';
import { Address } from '../../models/address';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  @Input() columns: string[] = [];
  @Input() data: any[] = [];
  @Input() type: string;

  constructor(private router: Router) {}
  getAddressString(addresses: Address[]): string {
    return addresses
      .map(
        (address) =>
          `${address.streetNumber} ${address.streetName}, ${address.city}, ${address.state} ${address.zipCode}`
      )
      .join('<br>');
  }

  onRowClick(item: any) {
    switch (this.type) {
      case 'customer':
        this.router.navigate(['/customers', item.id]);
        break;
      case 'account':
        this.router.navigate(['/accounts', item.accountId]);
        break;
      default:
        console.warn('Unsupported type');
        break;
    }
  }
}
