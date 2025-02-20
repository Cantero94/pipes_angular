import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BigNumberFormatterPipe } from "../../pipes/big-number-formatter.pipe";

@Component({
  selector: 'app-big-number-formatter',
  imports: [FormsModule, BigNumberFormatterPipe],
  templateUrl: './big-number-formatter.component.html',
  styleUrl: './big-number-formatter.component.css'
})
export class BigNumberFormatterComponent {
  numero: number = 0;
}
