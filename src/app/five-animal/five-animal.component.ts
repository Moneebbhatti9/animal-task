// five-animal.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from '../AnimalInterface';
import { AnimalDummyData } from '../AnimalDummyData';

@Component({
  selector: 'app-five-animal',
  templateUrl: './five-animal.component.html',
  styleUrls: ['./five-animal.component.css'],
})
export class FiveAnimalComponent implements OnInit {
  @Input() animals: Animal[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.animals = AnimalDummyData.slice(0, 5);
  }

  goBack(): void {
    this.router.navigate(['/all-animals']);
  }
}
