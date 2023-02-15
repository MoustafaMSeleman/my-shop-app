import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavBarService } from './header/navBar.service';
import { DbserviceApiService } from './services/dbservice-api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormComponent } from './form/form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { FormsModule } from '@angular/forms';
import { BindingComponent } from './binding/binding.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    FormComponent,
    ChildComponent,
    ParentComponent,
    BindingComponent,
    StructuralDirectivesComponent,
    
    
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule,MatButtonModule,MatIconModule,MatFormFieldModule,FormsModule],
  providers: [NavBarService,DbserviceApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
