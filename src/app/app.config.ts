import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(withFetch()), provideRouter(routes), provideClientHydration(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"legal-lens","appId":"1:510223158744:web:ed28402a751e55956336ad","storageBucket":"legal-lens.appspot.com","apiKey":"AIzaSyAzzAEFPu8jwwM5zM2owHJOXqHiZ2-ls8g","authDomain":"legal-lens.firebaseapp.com","messagingSenderId":"510223158744"}))), importProvidersFrom(provideAuth(() => getAuth()))]
};

