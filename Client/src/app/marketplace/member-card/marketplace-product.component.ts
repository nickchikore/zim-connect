import {Component, Input, OnInit} from '@angular/core';
import {Member} from '../../_models/member';

@Component({
  selector: 'app-marketplace-product-card',
  templateUrl: './marketplace-product.component.html',
  styleUrls: ['./marketplace-product.component.scss']
})
export class MarketplaceProductComponent implements OnInit {
  @Input() member: Member;
  constructor() { }

  ngOnInit(): void {
  }

}
