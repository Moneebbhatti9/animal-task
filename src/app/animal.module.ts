import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllAnimalsComponent } from './all-animals/all-animals.component';
import { FiveAnimalComponent } from './five-animal/five-animal.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AllAnimalsComponent, FiveAnimalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'five-animals', component: FiveAnimalComponent },
    ]),
  ],
})
export class AnimalModule {}
