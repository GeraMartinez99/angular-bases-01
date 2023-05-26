import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '01-bases';
  counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }
  decreaseBy(value: number): void {
    this.counter -= value;
  }
  reset(): void {
    this.counter = 10;
  }
}
