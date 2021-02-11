import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DahsboardComponent } from './dahsboard/dahsboard.component';

const routes: Routes = [
    {
    path:"Admin",
    children:[
      {
        path:"login",
        component:LoginComponent,
      },
      {
        path:"register",
        component:RegisterComponent,
      },
      {
        path:"dahsboard",
        component:DahsboardComponent,
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
