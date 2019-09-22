import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminColorComponent } from './admin-color.component';

describe('AdminColorComponent', () => {
  let component: AdminColorComponent;
  let fixture: ComponentFixture<AdminColorComponent>;

  beforeEach(async(() => {
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
