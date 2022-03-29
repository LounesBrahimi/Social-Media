import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GettingComponent } from './getting/getting.component';
import { PostingComponent } from './posting/posting.component';

const routes: Routes = [
  {path:"",redirectTo:"posts",pathMatch:"full"},
   {path:"post",component:PostingComponent},
   {path:"posts",component:GettingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
