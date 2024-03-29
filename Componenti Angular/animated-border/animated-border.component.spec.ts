import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedBorderComponent } from './animated-border.component';

describe('AnimatedBorderComponent', () => {
  let component: AnimatedBorderComponent;
  let fixture: ComponentFixture<AnimatedBorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatedBorderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimatedBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
