import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessMemberCardComponent } from './business-member-card.component';

describe('MemberCardComponent', () => {
  let component: BusinessMemberCardComponent;
  let fixture: ComponentFixture<BusinessMemberCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessMemberCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessMemberCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
