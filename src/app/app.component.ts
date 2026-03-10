import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

 inputValue: string = 'New Value';
 
}