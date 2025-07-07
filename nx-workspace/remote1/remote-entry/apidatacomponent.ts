import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-apidatacomponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './apidatacomponent.html',
  styleUrl: './apidatacomponent.css',
})
export class Apidatacomponent {
  private http = inject(HttpClient);
  data$ = this.http.get('http://localhost:8081/'); // Use your Docker API endpoint here
}
