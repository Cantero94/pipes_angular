import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextReverserComponent } from './text-reverser.component';

describe('TextReverserComponent', () => {
  let component: TextReverserComponent;
  let fixture: ComponentFixture<TextReverserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextReverserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextReverserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
