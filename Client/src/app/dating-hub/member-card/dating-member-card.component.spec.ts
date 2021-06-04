import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatingMemberCardComponent } from './dating-member-card.component';

describe('MemberCardComponent', () => {
  let component: DatingMemberCardComponent;
  let fixture: ComponentFixture<DatingMemberCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatingMemberCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatingMemberCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
