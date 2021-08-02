import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminColorComponent } from './admin-color.component';

describe('AdminColorComponent', () => {
  let component: AdminColorComponent;
  let fixture: ComponentFixture<AdminColorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
