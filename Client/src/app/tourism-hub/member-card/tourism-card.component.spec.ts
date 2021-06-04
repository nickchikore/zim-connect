import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourismCardComponent } from './tourism-card.component';

describe('MemberCardComponent', () => {
  let component: TourismCardComponent;
  let fixture: ComponentFixture<TourismCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourismCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourismCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
