import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SaludoComponent } from './saludo/saludo.component';
import { DirectivasComponent } from './directivas/directivas.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SaludoComponent,
    DirectivasComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'week_10';
  mensaje2: string = '';
  recibirSaludo(mensajeRecibido: string){
    this.mensaje2 = mensajeRecibido;
  }


}
