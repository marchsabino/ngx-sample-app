import { Routes } from '@angular/router';
import {Test} from './views/test/test';
import {Homepage} from './views/homepage/homepage';

export const routes: Routes = [
  { path: '', component: Homepage, pathMatch: 'full' },
  { path: 'test', component: Test}
];
