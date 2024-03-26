import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { NewproductComponent } from './newproduct/newproduct.component';

const routes: Routes = [
    {path : "home", component : HomeComponent},
    {path : "products", component : ProductsComponent},
    {path : "newproduct" , component : NewproductComponent},
    {path : "", redirectTo : "/home", pathMatch : "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }