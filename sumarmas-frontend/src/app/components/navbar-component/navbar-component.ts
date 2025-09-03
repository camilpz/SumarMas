import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar-component',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.scss'
})
export class NavbarComponent {
  open = signal(false);

  toggle() {
    this.open.update(v => !v);
  }

  close() {
    this.open.set(false);
  }
}
