import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path:'',
    component:UserComponent
  },
  {
    path:'user/view/:id',
    component:UserdetailComponent
  },
  {
    path:'admin/list',
    component:ListComponent
  },
  {
    path:'admin/add',
    component:AddComponent
  },
  {
    path:'admin/edit/:id',
    component:AddComponent
  },
  {
    path: 'admin/view/:id',
    component:ViewComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
