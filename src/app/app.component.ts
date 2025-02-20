import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TextHiderComponent } from "./components/text-hider/text-hider.component";
import { BigNumberFormatterComponent } from "./components/big-number-formatter/big-number-formatter.component";
import { ElapsedTimeCalcComponent } from "./components/elapsed-time-calc/elapsed-time-calc.component";
import { WordCounterComponent } from "./components/word-counter/word-counter.component";
import { AdultFilterComponent } from "./components/adult-filter/adult-filter.component";
import { TextReverserComponent } from "./components/text-reverser/text-reverser.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TextHiderComponent, BigNumberFormatterComponent, ElapsedTimeCalcComponent, WordCounterComponent, AdultFilterComponent, TextReverserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejercicios pipes personalizadas';
}
