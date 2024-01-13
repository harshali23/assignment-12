import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppModule } from './app/app.module';
import { HeaderComponent } from './app/header/header.component';
import { PersonalInfoComponent } from './app/personal-info/personal-info.component';
import { BugInfoComponent } from './app/bug-info/bug-info.component';
import { FooterComponent } from './app/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AppModule,HeaderComponent,PersonalInfoComponent,BugInfoComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment12';
}
