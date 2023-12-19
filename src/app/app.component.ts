import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './atoms/header/header.component';
import { SalesSummaryCardComponent } from './molecules/sales-sumary-card/sales-summary-card.component';
import { ButtonGroupComponent } from './molecules/button-group/button-group.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, SalesSummaryCardComponent, ButtonGroupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sales-dashboard';
}
