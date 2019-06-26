import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TryComponent } from './try/try.component';
import { RouterModule,Routes } from '@angular/router';
import { UpdateComponent } from './update/update.component';
import { SigninComponent } from './signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    TryComponent,
    UpdateComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([{path:'try',component:TryComponent},
    {path:'signin',component:SigninComponent},
    {path:'update',component:UpdateComponent}
  ])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
