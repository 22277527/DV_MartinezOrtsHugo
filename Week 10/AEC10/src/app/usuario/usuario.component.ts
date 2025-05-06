import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  @Input() usuario!: { id: number, nombre: string, activo: boolean };
  @Output() saludo = new EventEmitter<string>();
  @Output() cambiarEstado = new EventEmitter<number>();


  enviarSaludo() {
    this.saludo.emit(`Hola desde ${this.usuario.nombre}!`);
  }

cambiarEstadoActivo() {
  this.cambiarEstado.emit(this.usuario.id);
}
}
