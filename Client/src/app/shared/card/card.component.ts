import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

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
  @Input() warning: boolean;//set using commercial flag
  @Input() prompt: string;
  constructor(
    private router: Router) {
    this.hasTitle = false;
    this.hasSynopsis = false;
    this.hasImg = false;
    this.hasCta = false;
  }

  ngOnInit() {

  }

  setAccessWarning(){
    this.warning = true;
  }

}
