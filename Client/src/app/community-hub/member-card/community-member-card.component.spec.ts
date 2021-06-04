import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityMemberCardComponent } from './community-member-card.component';

describe('MemberCardComponent', () => {
  let component: CommunityMemberCardComponent;
  let fixture: ComponentFixture<CommunityMemberCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityMemberCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityMemberCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
