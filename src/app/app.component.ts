import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './atoms';
import {
  ButtonGroupComponent,
  FilterToggleComponent,
  SalesSummaryCardComponent,
} from './molecules';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    SalesSummaryCardComponent,
    ButtonGroupComponent,
    FilterToggleComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'sales-dashboard';
}
