import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminMessageComponent } from './admin-message.component';

describe('AdminMessageComponent', () => {
  let component: AdminMessageComponent;
  let fixture: ComponentFixture<AdminMessageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
