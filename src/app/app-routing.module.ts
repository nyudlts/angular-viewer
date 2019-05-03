import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourceComponent } from './resource/resource.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  // { path: 'book/:identifier', redirectTo: 'book/:identifier/1' },
  { path: 'book/:identifier/:page', component: ResourceComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
