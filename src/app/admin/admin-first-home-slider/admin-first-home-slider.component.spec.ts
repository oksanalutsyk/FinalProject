import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFirstHomeSliderComponent } from './admin-first-home-slider.component';

describe('AdminFirstHomeSliderComponent', () => {
  let component: AdminFirstHomeSliderComponent;
  let fixture: ComponentFixture<AdminFirstHomeSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFirstHomeSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFirstHomeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
