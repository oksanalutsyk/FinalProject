import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BigHeaderComponent } from './big-header.component';

describe('BigHeaderComponent', () => {
  let component: BigHeaderComponent;
  let fixture: ComponentFixture<BigHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BigHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
