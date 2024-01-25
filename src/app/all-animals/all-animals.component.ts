import { Component, OnInit } from '@angular/core';
import { AnimalDummyData } from './../AnimalDummyData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-animals',
  templateUrl: './all-animals.component.html',
  styleUrls: ['./all-animals.component.css'],
})
export class AllAnimalsComponent implements OnInit {
  constructor(private router: Router) {}
  animals = AnimalDummyData;

  ngOnInit(): void {
    this.animals = AnimalDummyData;
  }

  getFiveAnimal() {
    this.router.navigate(['/five-animals']);
  }
}
