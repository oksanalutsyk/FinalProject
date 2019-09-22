import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBrendsComponent } from './admin-brends.component';

describe('AdminBrendsComponent', () => {
  let component: AdminBrendsComponent;
  let fixture: ComponentFixture<AdminBrendsComponent>;

  beforeEach(async(() => {
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
