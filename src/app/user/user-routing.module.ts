import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { ShopComponent } from './shop/shop.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { DetailComponent } from './detail/detail.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {
    path:"content",
    component:ContentComponent,
    children:[
      {
        path:"blog",
        component:BlogComponent,
      }, 
      {
        path:"shop",
        component:ShopComponent,
      },
            {
        path:"news",
        component:NewsComponent,
      },
            {
        path:"about",
        component:AboutComponent,
      },
      {
        path:"detail/:id",
        component:DetailComponent,
      },
       {
        path:"",
        redirectTo:"blog",
        pathMatch:"full",
      }
    ],
  },
  
  {
    path:"",
    redirectTo:"content",
    pathMatch:"full",
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
