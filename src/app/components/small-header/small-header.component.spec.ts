import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SmallHeaderComponent } from './small-header.component';

describe('SmallHeaderComponent', () => {
  let component: SmallHeaderComponent;
  let fixture: ComponentFixture<SmallHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
