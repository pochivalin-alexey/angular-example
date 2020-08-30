import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StationsComponent } from './components/stations/stations.component';
import { RequestsComponent } from './components/requests/requests.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: '', redirectTo: 'all-station', pathMatch: 'full' },
  { path: 'requests', component: RequestsComponent },
  {
    path: 'all-station',
    component: StationsComponent,
    children: [{ path: ':id', component: DialogComponent }],
  },
  { path: 'error', component: ErrorComponent },
  {
    path: '**',
    redirectTo: '/error',
    // pathMatch: 'full',
  },
  // { path: 'all-station/:id', component: DialogComponent },
  // { path: 'error', component: ErrorPageComponent },
  // { path: '**', redirectTo: '/error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
