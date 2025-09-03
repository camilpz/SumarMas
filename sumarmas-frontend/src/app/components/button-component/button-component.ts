import { Component, Input } from '@angular/core';
import { ButtonModel } from '../../models/buttonModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-component',
  imports: [CommonModule],
  templateUrl: './button-component.html',
  styleUrl: './button-component.scss'
})
export class ButtonComponent {
@Input() style? = 'btn ';
@Input() labelName = '';
@Input() disabled? = false;
@Input() loading? = false;
@Input() icon? = '';

}
