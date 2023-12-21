import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface IDetailCard {
  icon: string;
  color: string;
}

interface ICardIcon {
  [key: string]: IDetailCard;
}

@Component({
  selector: 'app-credit-card-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './credit-card-display.component.html',
  styleUrl: './credit-card-display.component.css'
})
export class CreditCardDisplayComponent {
  @Input() cardNumber: string = '';
  @Input() iconClass: string = 'mastercard'; 



  getCardDetails(): {icon: string, color: string} {
    const cardDetails: ICardIcon = {
      'amex': {icon: 'fab fa-cc-amex', color: '#1F95EF'},
      'visa': {icon: 'fab fa-cc-visa', color: '#1A1F71'},
      'default': {icon: 'fab fa-cc-mastercard', color: '#EB001B'}
    };
  
    return cardDetails[this.iconClass] || cardDetails['default'];
  }

}
