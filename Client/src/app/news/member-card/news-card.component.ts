import {Component, Input, OnInit} from '@angular/core';
import {Member} from '../../_models/member';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {
  @Input() member: Member;
  constructor() { }

  ngOnInit(): void {
  }

}
