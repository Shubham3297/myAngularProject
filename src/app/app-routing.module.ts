import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularformsComponent } from './angularforms/angularforms.component';
import { CounterParentComponent } from './counter-parent/counter-parent.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectiveComponent } from './directive/directive.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentComponent } from './parent/parent.component';
import { PipeComponent } from './pipe/pipe.component';
import { RtfComponent } from './rtf/rtf.component';
import { AuthGuard } from './shared/Authentication/auth.guard';
import { StdDataComComponent } from './std-data-com/std-data-com.component';
import { UtdfComponent } from './utdf/utdf.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  // { path: "", redirectTo: "login  ", pathMatch: "full" },

  // default routing with redirect routing
  // { path: "", component: DatabindingComponent },//default routing
  // { path: "databinding", redirectTo: "directive", pathMatch: "full" },  // redirect routing


  { path: "databinding", component: DatabindingComponent, canActivate: [AuthGuard] }, // naming routing
  { path: "directive/:id", component: DirectiveComponent, canActivate: [AuthGuard] },
  { path: "parent", component: ParentComponent, canActivate: [AuthGuard] },

  {
    path: "angularforms", component: AngularformsComponent, canActivate: [AuthGuard],
    children: [
      { path: "", component: UtdfComponent },
      { path: "utdf", component: UtdfComponent },
      { path: "rtf", component: RtfComponent }
    ]
  },

  { path: "directive", component: DirectiveComponent, canActivate: [AuthGuard] },

  {
    path: "crud", canActivate: [AuthGuard],
    loadChildren: () => import('./crud/crud.module').then((m) => m.CrudModule)   // lazyloading custome module.
  },

  { path: "counterParent", component: CounterParentComponent, canActivate: [AuthGuard] },

  { path: "stdDataCom", component: StdDataComComponent, canActivate: [AuthGuard] },

  { path: "pipe", component: PipeComponent, canActivate: [AuthGuard] },
  { path: "**", component: PageNotFoundComponent }//wild card routing
  // { path: "**", component: LoginComponent }//wild card routing
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
