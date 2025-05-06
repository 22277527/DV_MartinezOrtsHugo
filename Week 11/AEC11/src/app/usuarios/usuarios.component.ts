import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  nuevoUsuario: Partial<Usuario> = {
    nombre: '',
    activo: false
  };

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }

  agregarUsuario(): void {
    if (this.nuevoUsuario.nombre?.trim()) {
      this.usuarioService.agregarUsuario(this.nuevoUsuario).subscribe(usuario => {
        this.usuarios.push(usuario);
        this.nuevoUsuario = { nombre: '', activo: false };
      });
    }
  }

  eliminarUsuario(id: number): void {
    this.usuarioService.eliminarUsuario(id).subscribe(() => {
      this.usuarios = this.usuarios.filter(u => u.id !== id);
    });
  }

  cambiarEstado(usuario: Usuario): void {
    const actualizado = { ...usuario, activo: !usuario.activo };
    this.usuarioService.actualizarUsuario(actualizado).subscribe(() => {
      usuario.activo = !usuario.activo;
    });
  }
}
