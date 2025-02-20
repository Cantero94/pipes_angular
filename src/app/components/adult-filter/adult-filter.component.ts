import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdultFilterPipe } from "../../pipes/adult-filter.pipe";

@Component({
  selector: 'app-adult-filter',
  imports: [FormsModule, AdultFilterPipe],
  templateUrl: './adult-filter.component.html',
  styleUrl: './adult-filter.component.css'
})
export class AdultFilterComponent {
texto: string = '';
}
