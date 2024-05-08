import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../productos';
@Component({
  selector: 'app-alerta-producto',
  templateUrl: './alerta-producto.component.html',
  styleUrl: './alerta-producto.component.css',
})
export class AlertaProductoComponent {
  @Input() producto: Producto | undefined;
  @Output() notify = new EventEmitter();
}
