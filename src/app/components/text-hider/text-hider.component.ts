import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextHiderPipe } from "../../pipes/text-hider.pipe";

@Component({
  selector: 'app-text-hider',
  imports: [TextHiderPipe, FormsModule],
  templateUrl: './text-hider.component.html',
  styleUrl: './text-hider.component.css'
})
export class TextHiderComponent {
  email: string = '';
  dni: string = '';
  creditCard: string = '';
}