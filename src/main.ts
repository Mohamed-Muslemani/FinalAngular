import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, RouterModule, Routes} from '@angular/router';
import {RoseListComponent} from './app/rose-list/rose-list.component';
import {RoseDetailComponent} from './app/rose-detail/rose-detail.component';
import {ModifyRosesComponent} from './app/modify-roses/modify-roses.component';
import {importProvidersFrom} from '@angular/core';


//Routes in the app
const routes: Routes = [
  {path: '', redirectTo: 'roseList', pathMatch: 'full'},
  {path: 'roseList', component: RoseListComponent},
  {path: 'roseDetail/:id', component: RoseDetailComponent},
  {path: 'modifyRose', component: ModifyRosesComponent},
]
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(RouterModule)
  ],
}).catch((err) => console.error(err));

