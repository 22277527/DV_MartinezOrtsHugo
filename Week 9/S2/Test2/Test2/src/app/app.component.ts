import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'app-root',
  standalone : true,
  imports: [
    RouterOutlet,
    FormsModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'soy Hugo';
  app = {surname : 'Martinez', surname2 : 'Orts'};
  btnDisabled: boolean = false;

  btnClicked(): void{
    this.app.surname = this.app.surname + "$";
  }

}
