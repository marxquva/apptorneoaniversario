import { Component, inject,signal, OnInit, computed } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BreadcrumbComponent } from '@shared/breadcrumb/breadcrumb.component';
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { SinDatosComponent } from "@components/shared/sin-datos/sin-datos.component"; 
import { MessageService } from '@services/comunicados/message.service';
import { LoadingService } from '@services/shared/loading.service';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Message } from '@interfaces/message.interface';


@Component({
  selector: 'app-messages',
  imports: [ MatButtonModule, BreadcrumbComponent, MatCardModule, MatDividerModule, SinDatosComponent,CommonModule, MatProgressSpinnerModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})

export class MessagesComponent implements OnInit{

  private messageService = inject(MessageService);
  private loadingService = inject(LoadingService);
  isLoading = computed(() => this.loadingService.isLoading());

  breadcrumbItems = ['Torneo', 'Comunicados'];
  comunicados = signal<Message[]>([]);
  //playerssignal<Player[]>([]);

  ngOnInit(): void {
    
    const edicionId = 2;
    this.loadingService.setLoading(true);

    this.messageService.getComunicadoById(edicionId).subscribe({
      next: (mensajes) => {
        //console.log(mensajes);
        if (mensajes) {
          this.comunicados.set(mensajes);
        } else {
          this.comunicados.set([]);
        }
        this.loadingService.setLoading(false);
      },
      error: (error) => {
        console.error('Error al cargar los comunicados:', error);
        this.loadingService.setLoading(false);
      }
    });

  }

}
