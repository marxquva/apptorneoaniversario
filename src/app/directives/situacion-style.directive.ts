import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appSituacionStyle]'
})
export class SituacionStyleDirective implements OnChanges {
  @Input('appSituacionStyle') situacion!: number;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.setStyle();
  }

  private setStyle(): void {
    let bgColor = '#e2e3e5'; // Gris claro por defecto
    let textColor = '#6c757d'; // Gris oscuro por defecto

    switch (this.situacion) {
      case 1: // Habilitado
        bgColor = '#d4edda'; // Verde claro
        textColor = '#155724'; // Verde oscuro
        break;
      case 2: // En revisión
        bgColor = '#e2e3e5'; // Amarillo claro
        textColor = '#6c757d'; // Marrón oscuro
        break;
      case 3: // Observado
        bgColor = '#fff3cd'; // Azul claro
        textColor = '#856404'; // Azul oscuro
        break;
      case 4: // No permitido
        bgColor = '#f8d7da'; // Rojo claro
        textColor = '#721c24'; // Rojo oscuro
        break;
    }

    this.renderer.setStyle(this.el.nativeElement, 'background-color', bgColor);
    this.renderer.setStyle(this.el.nativeElement, 'color', textColor);
    this.renderer.setStyle(this.el.nativeElement, 'padding', '0.5rem 1rem');
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '999px');
    this.renderer.setStyle(this.el.nativeElement, 'font-size', '14px');
    this.renderer.setStyle(this.el.nativeElement, 'display', 'inline-block');
  }
}
