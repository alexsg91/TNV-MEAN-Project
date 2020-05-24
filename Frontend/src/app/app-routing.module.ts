import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './routes/dashboard/dashboard.component'
import { AddComponent } from './routes/add/add.component';
import { DetailsComponent } from './routes/details/details.component';


const routes: Routes = [
  { path: "", redirectTo : '/dashboard', pathMatch: 'full' },
  { path: "dashboard", component : DashboardComponent, pathMatch: 'full' },
  { path: "add", component : AddComponent },
  { path: "details/:id", component : DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
