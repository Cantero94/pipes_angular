import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextReverserPipe } from "../../pipes/text-reverser.pipe";

@Component({
  selector: 'app-text-reverser',
  imports: [FormsModule, TextReverserPipe],
  templateUrl: './text-reverser.component.html',
  styleUrl: './text-reverser.component.css'
})
export class TextReverserComponent {
texto: String = "";

}
