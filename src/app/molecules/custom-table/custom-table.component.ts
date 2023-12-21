import { Component } from '@angular/core';
import { IconTextComponent } from '../../atoms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-table',
  standalone: true,
  imports: [IconTextComponent,CommonModule],
  templateUrl: './custom-table.component.html',
  styleUrl: './custom-table.component.css'
})
export class CustomTableComponent {
  transactions = [
    {
      icon: 'fas fa-check-circle', // Asume que tienes una clase correspondiente para éxito
      status: 'Cobro exitoso',
      date: '04/06/2020 - 17:14:24',
      paymentMethod: '**** **** **** 7771',
      transactionId: 'GZEN23784UBV2',
      amount: '$25.000',
      deduction: '-$1.500'
    },
    // ... más transacciones
  ];
}
