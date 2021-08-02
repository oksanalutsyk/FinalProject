import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminBrendsComponent } from './admin-brends.component';

describe('AdminBrendsComponent', () => {
  let component: AdminBrendsComponent;
  let fixture: ComponentFixture<AdminBrendsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBrendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
