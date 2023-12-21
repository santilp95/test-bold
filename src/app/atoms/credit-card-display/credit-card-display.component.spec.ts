import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardDisplayComponent } from './credit-card-display.component';

describe('CreditCardDisplayComponent', () => {
  let component: CreditCardDisplayComponent;
  let fixture: ComponentFixture<CreditCardDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditCardDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreditCardDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
