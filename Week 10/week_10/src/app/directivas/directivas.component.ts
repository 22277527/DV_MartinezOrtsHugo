import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './directivas.component.html',
  styleUrl: './directivas.component.css'
})
export class DirectivasComponent {
  mostrar: boolean = true;
  frutas: string[]= ["manzana","pera","naranja"]

}
