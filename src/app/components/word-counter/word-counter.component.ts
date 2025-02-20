import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WordCounterPipe } from '../../pipes/word-counter.pipe';


@Component({
  selector: 'app-word-counter',
  imports: [ FormsModule, WordCounterPipe],
  templateUrl: './word-counter.component.html',
  styleUrl: './word-counter.component.css'
})
export class WordCounterComponent {
texto: String = '';

}
