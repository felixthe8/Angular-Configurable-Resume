import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule}  from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';


import { ResumeInputComponent } from './resume-input/resume-input.component';
import { PersonalDetailsComponent } from './resume-input/personal-details/personal-details.component';

const routes: Routes = [
  { path: '',  component: ResumeInputComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResumeInputComponent,
    PersonalDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatDividerModule,
    MatListModule,
    RouterModule.forRoot(routes),
    MatTabsModule,
    MatCardModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
