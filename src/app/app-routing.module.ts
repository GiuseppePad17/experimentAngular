import { NgModule, Component } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { PreferitiComponent } from './pages/preferiti/preferiti.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ToDoListComponent } from './pages/to-do-list/to-do-list.component';

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path: 'to-do-list', component: ToDoListComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'preferiti', component: PreferitiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
