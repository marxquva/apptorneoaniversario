import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from "@angular/material/icon";
import { BreadcrumbComponent } from '@shared/breadcrumb/breadcrumb.component';
import { TablaposicionesComponent } from "./components/tablaposiciones/tablaposiciones.component";
import { GoleadoresComponent } from "./components/goleadores/goleadores.component";
import { ResumenComponent } from "./components/resumen/resumen.component";

@Component({
  selector: 'app-statistics',
  imports: [MatTabsModule, MatIconModule, BreadcrumbComponent, TablaposicionesComponent, GoleadoresComponent, ResumenComponent],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss'
})
export class StatisticsComponent {
  breadcrumbItems = ['Torneo', 'Estadisticas'];
}
