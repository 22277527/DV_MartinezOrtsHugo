import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent], // Aquí va en 'declarations', no en 'imports'
      schemas: [NO_ERRORS_SCHEMA], // Evita errores con componentes hijos no declarados
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'AEC10' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    
    // Asegúrate de que 'title' existe en AppComponent
    expect(app['title']).toEqual('AEC10');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    // Asegúrate de que el h1 contiene el texto esperado
    expect(compiled.querySelector('h1')?.textContent).toContain('Lista de Usuarios');
  });
});
