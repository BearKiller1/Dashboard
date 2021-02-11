import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './user/content/content.component';
const routes: Routes = [
  {
    path:"content",
    component:ContentComponent,
  },
  {
    path:"",
    redirectTo:"content",
    pathMatch:"full",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
