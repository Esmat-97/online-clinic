import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouslComponent } from './carousl.component';

describe('CarouslComponent', () => {
  let component: CarouslComponent;
  let fixture: ComponentFixture<CarouslComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouslComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouslComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
