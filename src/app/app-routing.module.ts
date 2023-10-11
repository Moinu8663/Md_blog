import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeshboardComponent } from './Admin/deshboard/deshboard.component';
import { HomeComponent } from './Admin/home/home.component';
import { PostComponent } from './Admin/post/post.component';
import { SettingComponent } from './Admin/setting/setting.component';

const routes: Routes = [
  {path:'',component:HomeComponent,
children:[
{path:'deshboard',component:DeshboardComponent},
{path:'post',component:PostComponent},
{path:'setting',component:SettingComponent},
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
