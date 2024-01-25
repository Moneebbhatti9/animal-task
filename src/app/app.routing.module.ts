// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllAnimalsComponent } from './all-animals/all-animals.component';
import { FiveAnimalComponent } from './five-animal/five-animal.component';

const routes: Routes = [
  { path: '', redirectTo: '/all-animals', pathMatch: 'full' },
  { path: 'all-animals', component: AllAnimalsComponent },
  { path: 'five-animals', component: FiveAnimalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
