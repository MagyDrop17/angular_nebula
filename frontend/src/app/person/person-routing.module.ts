import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importaciones de los componentes
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [

  { path: 'person', redirectTo: 'person/index', pathMatch: 'full' },
  { path: 'person/index', component: IndexComponent },
  { path: 'person/create', component: CreateComponent },
  { path: 'person/edit/:id', component: EditComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
