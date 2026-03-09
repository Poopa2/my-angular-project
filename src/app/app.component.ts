import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  counter: number = 0;

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowUp') {
      this.counter++;
    } else if (event.key === 'ArrowDown') {
      this.counter--;
    }
}

}
