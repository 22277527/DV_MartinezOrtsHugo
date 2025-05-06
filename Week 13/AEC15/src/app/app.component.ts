import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  async ngAfterViewInit(): Promise<void> {
    // Solo en navegador
    if (typeof window !== 'undefined') {
      const Plotly = await import('plotly.js');

      const data = [
        {
          x: ['Enero', 'Febrero', 'Marzo', 'Abril'],
          y: [10, 15, 13, 17],
          type: 'bar',
        }
      ];

      const layout = {
        title: 'Ventas por mes',
      };

      Plotly.newPlot('plotlyChart', data, layout);
    }
  }
}
