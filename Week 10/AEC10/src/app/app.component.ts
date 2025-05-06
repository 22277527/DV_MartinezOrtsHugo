import { Component } from '@angular/core';
import { UsuarioComponent } from './usuario/usuario.component'; // 👈 importa el componente hijo
import { CommonModule } from '@angular/common'; // para *ngFor, ngClass, ngStyle

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, UsuarioComponent], // 👈 registra el componente hijo aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuarios = [
    { id: 1, nombre: 'Ana', activo: true },
    { id: 2, nombre: 'Bruno', activo: false },
    { id: 3, nombre: 'Carmen', activo: true }
  ];

  mensajeRecibido = '';

  recibirSaludo(mensaje: string) {
    this.mensajeRecibido = mensaje;
  }
  cambiarEstadoUsuario(id: number) {
    const usuario = this.usuarios.find(u => u.id === id);
    if (usuario) {
      usuario.activo = !usuario.activo;
    }
  }
  
}
