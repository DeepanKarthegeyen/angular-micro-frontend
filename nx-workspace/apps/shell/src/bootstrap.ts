import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { NavigationComponent } from './app/navigation.component';

bootstrapApplication(NavigationComponent, appConfig).catch((err) => console.error(err));
