import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { InsightsComponent } from './app/insights/insights.component';

const bootstrap = () => bootstrapApplication(InsightsComponent, config);

export default bootstrap;
