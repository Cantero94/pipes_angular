import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigNumberFormatterComponent } from './big-number-formatter.component';

describe('BigNumberFormatterComponent', () => {
  let component: BigNumberFormatterComponent;
  let fixture: ComponentFixture<BigNumberFormatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigNumberFormatterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigNumberFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
