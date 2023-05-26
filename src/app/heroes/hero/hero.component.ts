import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizarNombre(): string {
    return this.name.toUpperCase();
  }
  nombre_edad(): string {
    return `${this.name} - ${this.age}`
  }
  chageHero(): void {
    this.name = 'Spiderman'
  }
  chageAge() {
    this.age = 25;
  }
}
