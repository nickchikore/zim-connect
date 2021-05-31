import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() imgUrl: string;
  @Input() cardTitle: string;
  @Input() synopsis: string;
  @Input() url: string;
  @Input() cta: string;
  @Input() hasImg: boolean;
  @Input() hasTitle: boolean;
  @Input() hasSynopsis: boolean;
  @Input() hasCta: boolean;
  @Input() subtext: string;

  constructor() {
    this.hasTitle = false;
    this.hasSynopsis = false;
    this.hasImg = false;
    this.hasCta = false;
  }

  ngOnInit() {

  }

}
