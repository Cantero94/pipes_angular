import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ElapsedTimeCalcPipe } from "../../pipes/elapsed-time-calc.pipe";

@Component({
  selector: 'app-elapsed-time-calc',
  imports: [FormsModule, ElapsedTimeCalcPipe],
  templateUrl: './elapsed-time-calc.component.html',
  styleUrl: './elapsed-time-calc.component.css'
})
export class ElapsedTimeCalcComponent {
 date: Date = new Date();

}
