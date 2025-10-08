import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { NgScrollbar } from 'ngx-scrollbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

interface MenuNode {
  name: string;
  icon?: string;
  route?: string;
  children?: MenuNode[];
}

interface FlatNode {
  expandable: boolean;
  name: string;
  icon?: string;
  route?: string;
  level: number;
}

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule, MatListModule, MatIconModule, MatTreeModule, MatButtonModule, NgScrollbar],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  private _transformer = (node: MenuNode, level: number): FlatNode => ({
    expandable: !!node.children && node.children.length > 0,
    name: node.name,
    icon: node.icon,
    route: node.route,
    level,
  });

  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level,
    node => node.expandable
  );

  treeFlattener = new MatTreeFlattener<MenuNode, FlatNode>(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = this.menuData;
    // Expande todos los nodos
    const allNodes = this.treeControl.dataNodes;
    allNodes.forEach(node => {
      if (node.expandable) {
        this.treeControl.expand(node);
      }
    });
  }




  hasChild = (_: number, node: FlatNode) => node.expandable;

  menuData: MenuNode[] = [
    /*{
      name: 'Dashboard',
      icon: 'dashboard',
      route: '/admin/dashboard',
    },*/
    {
      name: 'Torneo',
      icon: 'sports_soccer',
      children: [
        { name: 'Equipos', icon: 'groups', route: '/admin/teams' },
        { name: 'Partidos', icon: 'event', route: '/admin/matches' },
        { name: 'Estadísticas', icon: 'bar_chart', route: '/admin/statistics' },
      ],
    },
    /*{
      name: 'Configuración',
      icon: 'settings',
      route: '/admin/settings',
    },*/
  ];
}
