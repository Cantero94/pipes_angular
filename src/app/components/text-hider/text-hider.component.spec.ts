import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextHiderComponent } from './text-hider.component';

describe('TextHiderComponent', () => {
  let component: TextHiderComponent;
  let fixture: ComponentFixture<TextHiderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextHiderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextHiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
