import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactNameFormComponent } from './react-name-form/react-name-form.component';
import { AddAndRemoveformComponent } from './add-and-removeform/add-and-removeform.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component'

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    ReactNameFormComponent,
    AddAndRemoveformComponent,
    NewCourseFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
