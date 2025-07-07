import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <a routerLink="/remote1" routerLinkActive="active">Remote 1</a> |
      <a routerLink="/remote2" routerLinkActive="active">Remote 2</a> |
      <a routerLink="/shell-api" routerLinkActive="active">Shell API</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    nav { margin-bottom: 20px; }
    .active { font-weight: bold; }
  `]
})
export class NavigationComponent {} 