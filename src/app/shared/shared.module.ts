import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SitebarComponent } from './sitebar/sitebar.component';
import { ImgsliderComponent } from './imgslider/imgslider.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';
import { FormsearchComponent } from './formsearch/formsearch.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SitebarComponent,
    ImgsliderComponent,
    DetailsComponent,
    FormsearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    SitebarComponent,
    ImgsliderComponent,
    DetailsComponent,
    FormsearchComponent
  ]
})
export class SharedModule { }
