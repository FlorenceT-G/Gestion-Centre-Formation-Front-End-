import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AssistantsComponent } from './Assistant/assistants/assistants.component';
import { CommercialsComponent } from './Commercial/commercials/commercials.component';
import { ContactsComponent } from './Contact/contacts/contacts.component';
import { FormateursComponent } from './Formateur/formateurs/formateurs.component';
import { FormationsComponent } from './Formation/formations/formations.component';
import { ParticipantsComponent } from './Participant/participants/participants.component';
import { ProspectsComponent } from './Prospect/prospects/prospects.component';
import { RelancesComponent } from './Relance/relances/relances.component';
import { UtilisateursComponent } from './Utilisateur/utilisateurs/utilisateurs.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './Main/admin/admin.component';
import { FormateurComponent } from './Main/formateur/formateur.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpInterceptorBasicAuthService } from './services/http-interceptor-basic-auth.service';
import { AddAssistantComponent } from './Assistant/add-assistant/add-assistant.component';
import { ModifAssistantComponent } from './Assistant/modif-assistant/modif-assistant.component';
import { AddCommercialComponent } from './Commercial/add-commercial/add-commercial.component';
import { ModifCommercialComponent } from './Commercial/modif-commercial/modif-commercial.component';
import { CommonModule } from '@angular/common';
import { AccueilAdminComponent } from './Admin/accueil-admin/accueil-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AssistantsComponent,
    CommercialsComponent,
    ContactsComponent,
    FormateursComponent,
    FormationsComponent,
    ParticipantsComponent,
    ProspectsComponent,
    RelancesComponent,
    UtilisateursComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    FormateurComponent,
    AccueilAdminComponent,
    AddAssistantComponent,
    ModifAssistantComponent,
    AddCommercialComponent,
    ModifCommercialComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorBasicAuthService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
