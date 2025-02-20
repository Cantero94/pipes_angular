import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElapsedTimeCalcComponent } from './elapsed-time-calc.component';

describe('ElapsedTimeCalcComponent', () => {
  let component: ElapsedTimeCalcComponent;
  let fixture: ComponentFixture<ElapsedTimeCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElapsedTimeCalcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElapsedTimeCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
