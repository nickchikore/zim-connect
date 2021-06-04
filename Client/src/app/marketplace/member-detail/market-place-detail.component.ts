import { Component, OnInit } from '@angular/core';
import {MembersService} from '../../_services/members.service';
import {ActivatedRoute} from '@angular/router';
import {Member} from '../../_models/member';
import {NgxGalleryImage, NgxGalleryOptions, NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-marketplace-detail',
  templateUrl: './market-place-detail.component.html',
  styleUrls: ['./market-place-detail.component.scss']
})
export class MarketPlaceDetailComponent implements OnInit {
  member: Member;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor(private memberService: MembersService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadMember();
    this.galleryOptions = [
      {
        width: '500px',
        height: '500px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false
      }
    ];
  }
  getImages(): NgxGalleryImage[]{
    const imageUrls = [];
    for (const photo of this.member.photos){
      imageUrls.push({
        small: photo?.url,
        medium: photo?.url,
        big: photo?.url,
      });
      return imageUrls;
    }
  }
  loadMember(){
    this.memberService.getMember(this.route.snapshot.paramMap.get('username')).subscribe(member => {
      this.member = member;
      this.galleryImages = this.getImages();
    });
  }
}
