import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';

import {
  AmountDisplayComponent,
  CreditCardDisplayComponent,
  IconTextComponent,
} from '../../atoms';
import { FilterTableService, StateService } from '../../shared';
import { CheckboxStatus } from '../filter-toggle/filter-toggle.component';


interface ITransaction {
  status: string;
  date: string;
  paymentMethod: {
    icon: string;
    number: string;
  };
  transactionId: string;
  amount: string;
  deduction?: string;
  paymentType: string;
}

@Component({
  selector: 'app-custom-table',
  standalone: true,
  imports: [
    AmountDisplayComponent,
    CommonModule,
    CreditCardDisplayComponent,
    IconTextComponent,
  ],
  templateUrl: './custom-table.component.html',
  styleUrl: './custom-table.component.css',
})
export class CustomTableComponent implements OnInit , OnDestroy{
  private filterSubscription: Subscription = new Subscription();

  title: string | null = null;
  transactions: ITransaction[] = [
    {
      status: 'Cobro exitoso',
      date: '04/06/2020 - 17:14:24',
      paymentMethod: {
        icon: 'mastercard',
        number: '**** **** **** 7771',
      },
      transactionId: 'GZEN23784UBV2',
      amount: '$25.000',
      deduction: '-$1.500',
      paymentType: 'link',
    },
    {
      status: 'Cobro no realizado',
      date: '04/06/2020 - 17:14:24',
      paymentMethod: {
        icon: 'visa',
        number: '**** **** **** 7771',
      },
      transactionId: 'GZEN23784UBV2',
      amount: '$25.000',
      paymentType: 'link',
    },
    {
      status: 'Cobro no realizado',
      date: '04/06/2020 - 17:14:24',
      paymentMethod: {
        icon: 'visa',
        number: '**** **** **** 7771',
      },
      transactionId: 'GZEN23784UBV2',
      amount: '$25.000',
      paymentType: 'dataphone',
      deduction: '-$1.500',
    },
  ];

  filteredTransactions: ITransaction[] = [];

  constructor(private stateService: StateService,private filterTableService: FilterTableService) {
    this.stateService.title$.subscribe((label: string | null) => {
      this.title = label;
    });
  }

  ngOnInit() {
    this.filterSubscription = this.filterTableService.currentFilter$.pipe(
      startWith(this.filterTableService.getInitialFilter())
    ).subscribe(filter => {
      this.applyFilter(filter);
    });
  }

  ngOnDestroy() {
    this.filterSubscription.unsubscribe();
  }

  applyFilter(filter: CheckboxStatus) {
    if (filter.datafono) {
      this.filteredTransactions = this.transactions.filter(t => t.paymentType === 'dataphone');
    } else if (filter.linkDePago) {
      this.filteredTransactions = this.transactions.filter(t => t.paymentType === 'link');
    } else {
      this.filteredTransactions = [...this.transactions];
    }
  }
}
