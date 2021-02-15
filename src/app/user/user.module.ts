import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { BlogComponent } from './blog/blog.component';
import { ShopComponent } from './shop/shop.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { DetailComponent } from './detail/detail.component';
import { ContentComponent } from './content/content.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [BlogComponent, ShopComponent, NewsComponent, AboutComponent, DetailComponent, ContentComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  exports:[ContentComponent]
})
export class UserModule { }
