import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
   imports: [RouterOutlet, FormsModule],
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

staticInput: string = 'Static two-way binding';
  dynamicInput: string = '';

}
