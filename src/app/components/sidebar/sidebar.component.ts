import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [ 
    { path: '/backend/inicio', title: 'Inicio',  icon:'home', class: '' },
    { path: '/backend/panel', title: 'Panel central',  icon: 'dashboard', class: '' },
    { path: '/backend/listado-productos', title: 'Productos',  icon:'style', class: '' },
    { path: '/backend/listado-categorias', title: 'Categorias',  icon:'category', class: '' },
    { path: '/backend/listado-pedidos', title: 'Pedidos',  icon:'import_contacts', class: '' },
    { path: '/backend/listado-ventas', title: 'Ventas',  icon:'equalizer', class: '' },
    { path: '/backend/anuncios', title: 'Anuncios',  icon:'layers', class: '' },
    { path: '/backend/configuracion', title: 'Datos de cuenta',  icon:'settings', class: '' },
];

@Component({
  selector: 'app-sidebar', 
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  menuItems: any[];
  clienteOnline : string;

  constructor() { }

  ngOnInit() {
    this.clienteOnline = localStorage.getItem("cliente-chango");
    if(this.clienteOnline === null || this.clienteOnline === undefined){
        // location.href="http://changofree.com/home";
    }
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
