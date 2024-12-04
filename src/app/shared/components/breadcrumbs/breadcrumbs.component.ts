import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

export interface Breadcrumb {
  name: string,
  link: string
}

@Component({
  selector: 'app-breadcrumbs',
  imports: [CommonModule],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss'
})
export class BreadcrumbsComponent {
  @Input() breadcrumbs!: Breadcrumb[];

  constructor(private router: Router) { }

  onCrumbClick(link: string) {
    this.router.navigate([`${link}`]);
  }
}

