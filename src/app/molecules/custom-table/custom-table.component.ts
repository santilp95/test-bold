import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AmountDisplayComponent,
  CreditCardDisplayComponent,
  IconTextComponent,
} from '../../atoms';

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
    },
  ];
}
