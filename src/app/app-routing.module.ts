import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ContactListComponent } from './contact-list/contact-list.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'contact-list'},
  {path: 'contact-list', component: ContactListComponent},
  {path: 'contact-create', component: ContactCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
