import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCarEntityComponent } from './update-car-entity.component';

describe('UpdateCarEntityComponent', () => {
  let component: UpdateCarEntityComponent;
  let fixture: ComponentFixture<UpdateCarEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCarEntityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCarEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
