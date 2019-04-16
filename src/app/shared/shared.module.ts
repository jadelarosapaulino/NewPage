import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SitebarComponent } from './sitebar/sitebar.component';
import { ImgsliderComponent } from './imgslider/imgslider.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SitebarComponent,
    ImgsliderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    SitebarComponent,
    ImgsliderComponent
  ]
})
export class SharedModule { }
