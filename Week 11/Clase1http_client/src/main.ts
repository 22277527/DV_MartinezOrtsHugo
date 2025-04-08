import { bootstrapApplication } from '@angular/platform-browser';
import { UserListComponent } from './app/components/user-list/user-list.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';
import { UserDetailComponent } from './app/components/user-details/user-detail.component';
import { AppComponent } from './app/app.component';
//import { appConfig } from './app/app.config';



const routes: Routes = [
  { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
  {path: 'usuarios', component: UserListComponent},
  {path: 'usuarios/:id', component: UserDetailComponent},
];


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
  ]});
    
  