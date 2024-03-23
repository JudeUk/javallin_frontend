import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { InsightsComponent } from './app/insights/insights.component';

bootstrapApplication(InsightsComponent, appConfig)
  .catch((err) => console.error(err));

