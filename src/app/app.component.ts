import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
   imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

   colorMode: string = 'lightMode';
 
toggleMode() {
    if (this.colorMode === 'lightMode') {
      this.colorMode = 'darkMode';
    } else {
      this.colorMode = 'lightMode';
    }

  }

}
