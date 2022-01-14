import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarEntityDetailsComponent } from './car-entity-details.component';

describe('CarEntityDetailsComponent', () => {
  let component: CarEntityDetailsComponent;
  let fixture: ComponentFixture<CarEntityDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarEntityDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarEntityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
