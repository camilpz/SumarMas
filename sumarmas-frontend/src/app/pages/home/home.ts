import { Component } from '@angular/core';
import { ButtonComponent } from "../../components/button-component/button-component";

@Component({
  selector: 'app-home',
  imports: [ButtonComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  show(){
    alert('Button clicked!');
  }
}
