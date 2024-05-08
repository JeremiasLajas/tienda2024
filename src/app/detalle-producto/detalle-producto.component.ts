import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto, productos } from '../productos';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css'],
})
export class DetalleProductoComponent implements OnInit {
  producto: Producto | undefined;

  constructor(private ruta: ActivatedRoute) {}

  ngOnInit() {
    // Obtenemos el id que viene en la ruta
    const routeParam = this.ruta.snapshot.paramMap;
    const productoId = Number(routeParam.get('id'));

    // Buscar el producto con el id productoId
    this.producto = productos.find((producto) => producto.id === productoId);
  }
}
