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
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';


import { ResumeInputComponent } from './resume-input/resume-input.component';
import { PersonalDetailsComponent } from './resume-input/personal-details/personal-details.component';
import { EducationComponent } from './resume-input/education/education.component';
import { EducationEntryComponent } from './resume-input/education/education-entry/education-entry.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IconButtonComponent } from './resume-input/shared/icon-button/icon-button.component';
import { ReviewComponent } from './resume-input/review/review.component';

const routes: Routes = [
  { path: '',  component: ResumeInputComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResumeInputComponent,
    PersonalDetailsComponent,
    EducationComponent,
    EducationEntryComponent,
    IconButtonComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MatDividerModule,
    MatListModule,
    RouterModule.forRoot(routes),
    MatTabsModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
