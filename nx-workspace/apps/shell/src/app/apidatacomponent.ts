import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-apidatacomponent',
  standalone: true,
  imports: [CommonModule],
  template: `<div *ngIf="data$ | async as data; else loading">
               <pre>{{ data | json }}</pre>
             </div>
             <ng-template #loading>Loading...</ng-template>`,
})
export class Apidatacomponent {
  private http = inject(HttpClient);
  data$ = this.http.get('https://lludph304l.execute-api.eu-north-1.amazonaws.com/api/dashboard/stats');
}
