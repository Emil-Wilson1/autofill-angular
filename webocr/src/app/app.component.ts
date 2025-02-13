import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageToTextComponent } from './image-to-text/image-to-text.component';

@Component({
  selector: 'app-root',
  imports: [ImageToTextComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'webocr';
}
