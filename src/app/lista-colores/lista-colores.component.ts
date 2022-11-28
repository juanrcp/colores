import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ColoresService } from '../servicios/colores.service';

@Component({
  selector: 'app-lista-colores',
  templateUrl: './lista-colores.component.html',
  styleUrls: ['./lista-colores.component.css']
})
export class ListaColoresComponent implements OnInit {

  listaColores: any[] = [];

  constructor(private colorServicio: ColoresService) { }

  ngOnInit(): void {
    this.getColores();
  }

  getColores(): void{
    this.colorServicio.getColores().subscribe(resp => {       
      this.listaColores = resp.data;
      
    });
  }
}
