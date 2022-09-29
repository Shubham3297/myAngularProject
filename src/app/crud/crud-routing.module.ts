import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: "", component: DashBoardComponent },
  { path: "dashboard", component: DashBoardComponent },
  { path: "add", component: AddComponent },
  { path: "edit/:id", component: EditComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
