import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';

@Component({
  selector: 'app-apidatacomponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './apidatacomponent.html',
  styleUrl: './apidatacomponent.css',
})
export class Apidatacomponent {
  data$ = of({ message: 'This is static data for remote2!' });
}
