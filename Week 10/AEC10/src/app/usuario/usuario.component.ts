import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule], // 👈 Importa CommonModule aquí también
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  @Input() nombre!: string;
  @Input() activo!: boolean;
  @Output() saludar = new EventEmitter<string>();
  @Output() cambiarEstado = new EventEmitter<void>();

  enviarSaludo() {
    this.saludar.emit(`Hola, soy ${this.nombre}`);
  }

  toggleEstado() {
    this.cambiarEstado.emit();
  }
}
