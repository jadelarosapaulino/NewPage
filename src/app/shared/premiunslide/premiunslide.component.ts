import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-premiunslide',
  templateUrl: './premiunslide.component.html',
  styleUrls: ['./premiunslide.component.css']
})
export class PremiunslideComponent implements OnInit {

  config: SwiperOptions = {
    autoplay: 0, // Autoplay option having value in milliseconds
    initialSlide: 0, // Slide Index Starting from 0
    slidesPerView: 4, // Slides Visible in Single View Default is 1
    pagination: '.swiper-pagination', // Pagination Class defined
    paginationClickable: true, // Making pagination dots clicable
    nextButton: '.swiper-button-next', // Class for next button
    prevButton: '.swiper-button-prev', // Class for prev button
    spaceBetween: 5 // Space between each Item
  };

  constructor() {}

  ngOnInit() {
  }

}
