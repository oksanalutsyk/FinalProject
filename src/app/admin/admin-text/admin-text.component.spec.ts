import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTextComponent } from './admin-text.component';

describe('AdminTextComponent', () => {
  let component: AdminTextComponent;
  let fixture: ComponentFixture<AdminTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
