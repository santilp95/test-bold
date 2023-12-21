import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AmountDisplayComponent,
  CreditCardDisplayComponent,
  IconTextComponent,
} from '../../atoms';
import { StateService } from '../../shared';

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
export class CustomTableComponent {
  title: string = 'Septiembre';
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

  constructor(private stateService: StateService) {
    this.stateService.title$.subscribe((label: string) => {
      this.title = label;
    });
  }
}
