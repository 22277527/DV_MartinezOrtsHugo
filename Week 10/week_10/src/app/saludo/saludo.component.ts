import { Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-saludo',
  standalone: true,
  imports: [],
  templateUrl: './saludo.component.html',
  styleUrl: './saludo.component.css'
})
export class SaludoComponent {
  mensaje:  string= 'Hola desde el componente saludo';
  @Input() nombre: string = '';
  @Output() alSaludar = new EventEmitter<string>();
  
  saludar(){
    this.alSaludar.emit('Este Botón funciona')
  }
}
