import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectiveComponent } from './directive/directive.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AngularformsComponent } from './angularforms/angularforms.component';
import { UtdfComponent } from './utdf/utdf.component';
import { RtfComponent } from './rtf/rtf.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PipeComponent } from './pipe/pipe.component';
import { MygenderPipe } from './shared/customePipe/mygender.pipe'
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CounterComponent } from './counter/counter.component';
import { CounterParentComponent } from './counter-parent/counter-parent.component';
import { MyDirectoryDirective } from './shared/customeDir/my-directory.directive';
import { StdDataComComponent } from './std-data-com/std-data-com.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    DirectiveComponent,
    ParentComponent,
    ChildComponent,
    NavComponent,
    FooterComponent,
    AngularformsComponent,
    UtdfComponent,
    RtfComponent,
    PageNotFoundComponent,
    PipeComponent,
    MygenderPipe,
    CounterComponent,
    CounterParentComponent,
    MyDirectoryDirective,
    StdDataComComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CarouselModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
