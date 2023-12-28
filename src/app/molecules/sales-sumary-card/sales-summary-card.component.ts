import { Component } from '@angular/core';

import { StateService } from '../../shared';

@Component({
  selector: 'app-sales-summary-card',
  standalone: true,
  imports: [],
  templateUrl: './sales-summary-card.component.html',
  styleUrl: './sales-summary-card.component.css'
})
export class SalesSummaryCardComponent {
  title: string | null= null;
  constructor(private stateService: StateService) {
    this.stateService.title$.subscribe((label: string | null) => {
      this.title = label;
    });
  }
}
