import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { IncubatorComponent } from './incubator/incubator.component';
import { IndustryComponent } from './industry/industry.component';
import { CommitteeComponent } from './committee/committee.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InvestorsComponent } from './investors/investors.component';
import { EducationComponent } from './education/education.component';
import { RegulatorComponent } from './regulator/regulator.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    IncubatorComponent,
    IndustryComponent,
    CommitteeComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    InvestorsComponent,
    EducationComponent,
    RegulatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
