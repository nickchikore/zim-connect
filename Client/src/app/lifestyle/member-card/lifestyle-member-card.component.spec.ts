import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifestyleMemberCardComponent } from './lifestyle-member-card.component';

describe('MemberCardComponent', () => {
  let component: LifestyleMemberCardComponent;
  let fixture: ComponentFixture<LifestyleMemberCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifestyleMemberCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifestyleMemberCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
