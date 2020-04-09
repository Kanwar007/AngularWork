

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactNameFormComponent } from './react-name-form/react-name-form.component';
import { AddAndRemoveformComponent } from './add-and-removeform/add-and-removeform.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PostFormComponent } from './post-form/post-form.component'


@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    ReactNameFormComponent,
    AddAndRemoveformComponent,
    NewCourseFormComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
