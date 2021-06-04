import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketplaceProductComponent } from './marketplace-product.component';

describe('MemberCardComponent', () => {
  let component: MarketplaceProductComponent;
  let fixture: ComponentFixture<MarketplaceProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketplaceProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketplaceProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
