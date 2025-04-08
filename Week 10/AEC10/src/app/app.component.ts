import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 Importa CommonModule
import { UsuarioComponent } from './usuario/usuario.component'; // 👈 Importa el componente hijo

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, UsuarioComponent], // 👈 IMPORTANTE: Añadir CommonModule y UsuarioComponent aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuarios = [
    { nombre: 'Juan', activo: true },
    { nombre: 'Maria', activo: false },
    { nombre: 'Carlos', activo: true }
  ];

  manejarSaludo(mensaje: string) {
    alert(mensaje);
  }

  cambiarEstado(index: number) {
    this.usuarios[index].activo = !this.usuarios[index].activo;
  }
}
