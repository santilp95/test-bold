import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterToggleComponent } from './filter-toggle.component';

describe('FilterToggleComponent', () => {
  let component: FilterToggleComponent;
  let fixture: ComponentFixture<FilterToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterToggleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
