import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CommitteeComponent } from './committee/committee.component';
import { HomeComponent } from './home/home.component';
import { IncubatorComponent } from './incubator/incubator.component';
import { IndustryComponent } from './industry/industry.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InvestorsComponent } from './investors/investors.component';
import { EducationComponent } from './education/education.component';
import { RegulatorComponent } from './regulator/regulator.component';

const routes: Routes = [
  {path : 'user', component:UserComponent},
  {path : 'admin', component:AdminComponent},
  {path : 'incubator', component:IncubatorComponent},
  {path : 'industry', component: IndustryComponent},
  {path : 'committee', component: CommitteeComponent},
  {path : 'home', component:HomeComponent},
  {path : 'header', component:HeaderComponent},
  {path : 'footer', component:FooterComponent},
  {path : 'investors', component:InvestorsComponent},
  {path : 'education', component:EducationComponent},
  {path : 'regulator', component:RegulatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent =
[UserComponent, AdminComponent, 
  IncubatorComponent, IndustryComponent, 
  CommitteeComponent, HomeComponent,
HeaderComponent, FooterComponent, InvestorsComponent,
EducationComponent,RegulatorComponent]
