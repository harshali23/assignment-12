import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { BugInfoComponent } from './bug-info/bug-info.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, HeaderComponent, PersonalInfoComponent, BugInfoComponent, FooterComponent
  ],
  exports : [HeaderComponent, PersonalInfoComponent,BugInfoComponent,FooterComponent]
})
export class AppModule { }
