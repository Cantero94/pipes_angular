import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultFilterComponent } from './adult-filter.component';

describe('AdultFilterComponent', () => {
  let component: AdultFilterComponent;
  let fixture: ComponentFixture<AdultFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdultFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdultFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
