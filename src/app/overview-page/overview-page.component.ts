import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavComponent } from '../header-nav/header-nav.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-overview-page',
  standalone: true,
  imports: [CommonModule, HeaderNavComponent, MatButtonModule, MatCardModule],
  templateUrl: './overview-page.component.html',
  styleUrl: './overview-page.component.scss',
})
export class OverviewPageComponent {
  public dogs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
