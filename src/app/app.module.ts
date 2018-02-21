import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router'; 
import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { QuoteItemComponent } from './quote-item/quote-item.component';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { routes } from './routes';
import { AlbertoContadorService } from '../services/AlbertoContador.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    QuoteItemComponent,
    QuoteListComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)  // Configure the router module
  ],
  providers: [AlbertoContadorService], // NOTE: make the service a singleton for whole module
  bootstrap: [AppComponent]
})
export class AppModule { }
