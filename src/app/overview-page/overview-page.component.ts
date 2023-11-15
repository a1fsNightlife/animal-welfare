import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavComponent } from '../header-nav/header-nav.component';

@Component({
  selector: 'app-overview-page',
  standalone: true,
  imports: [CommonModule, HeaderNavComponent],
  templateUrl: './overview-page.component.html',
  styleUrl: './overview-page.component.scss',
})
export class OverviewPageComponent {}
