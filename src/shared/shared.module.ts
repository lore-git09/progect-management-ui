import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/header/header.component';
import { HomeComponent } from 'src/home/home.component';
import { AppComponent } from 'src/app/app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    
  ]
})
export class SharedModule { }


/*
BrowserModule, 
    AppRoutingModule,   
    RouterModule,
    HttpClientModule,
    NgbModule,
    NgxSpinnerModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
*/
