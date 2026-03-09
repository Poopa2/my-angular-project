import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
onKey(event: KeyboardEvent) {
  console.log(event.key)        // แสดงปุ่มที่ถูกกด
}

onClick(event: MouseEvent) {
  console.log(event.clientX, event.clientY) // พิกัดตำแหน่งที่คลิก
}

}
