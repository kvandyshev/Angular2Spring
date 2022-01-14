import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCarEntityComponent } from './create-car-entity.component';

describe('CreateCarEntityComponent', () => {
  let component: CreateCarEntityComponent;
  let fixture: ComponentFixture<CreateCarEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCarEntityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCarEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
