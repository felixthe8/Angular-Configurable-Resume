import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
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
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './resume-viewer/header/header.component';
import { ResumeInputComponent } from './resume-input/resume-input.component';
import { PersonalDetailsComponent } from './resume-input/personal-details/personal-details.component';
import { EducationComponent } from './resume-input/education/education.component';
import { EducationEntryComponent } from './resume-input/education/education-entry/education-entry.component';
import { IconButtonComponent } from './resume-input/shared/icon-button/icon-button.component';
import { ReviewComponent } from './resume-input/review/review.component';
import { ResumeViewerComponent } from './resume-viewer/resume-viewer.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { MatExpansionModule } from '@angular/material/expansion';
import { PhonePipe } from './shared/phone.pipe';


export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

const routes: Routes = [
  { path: '',  component: ResumeInputComponent },
  { path: 'view', component: ResumeViewerComponent }
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
    ReviewComponent,
    ResumeViewerComponent,
    PhonePipe
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
    MatButtonModule,
    NgxMaskModule.forRoot(),
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
