import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateComponent} from './product/create/create.component'
import { EditComponent } from './product/edit/edit.component';
import { ShowComponent } from './product/show/show.component';

const routes: Routes = [
  {path:"create", component: CreateComponent },
  {path:"home", component: ShowComponent },
  {path:"edit/:id", component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
