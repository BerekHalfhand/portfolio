import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {  MatButtonModule,
          MatCheckboxModule,
          MatCardModule,
          MatGridListModule,
          MatIconModule,
          MatFormFieldModule,
          MatInputModule
      } from '@angular/material';
// import { ParallaxScrollModule } from 'ng2-parallaxscroll';
import { FlexLayoutModule } from '@angular/flex-layout';

import { WINDOW_PROVIDERS } from 'helpers/windowRef';

import { AppComponent, Pane } from './app.component';
import { RainyDayComponent } from './rainy-day/rainy-day.component';
import { RaindropComponent } from './raindrop/raindrop.component';
import { WindowPaneComponent } from './window-pane/window-pane.component';

import { RainyDayService } from './rainy-day/rainy-day.service';
import { ScrollService } from 'app/scroll.service';

import { FrontRainDirective } from 'app/directives/front-rain.directive';
import { BackRainDirective } from 'app/directives/back-rain.directive';

import { SkillsPaneComponent } from './skills-pane/skills-pane.component';
import { PolaroidComponent } from './polaroid/polaroid.component';
import { MenuComponent } from './menu/menu.component';
import { ContactPaneComponent } from './contact-pane/contact-pane.component';
import { ScrollButtonComponent } from './scroll-button/scroll-button.component';
import { TeximateModule } from 'ngx-teximate';
import { ProjectsPaneComponent } from './projects-pane/projects-pane.component';
import { ProjectComponent } from './project/project.component';
import { SkillBarComponent } from './skill-bar/skill-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    RainyDayComponent,
    RaindropComponent,
    FrontRainDirective,
    BackRainDirective,
    WindowPaneComponent,
    SkillsPaneComponent,
    PolaroidComponent,
    Pane,
    MenuComponent,
    ContactPaneComponent,
    ScrollButtonComponent,
    ProjectsPaneComponent,
    ProjectComponent,
    SkillBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    // ParallaxScrollModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    TeximateModule
  ],
  providers: [RainyDayService, WINDOW_PROVIDERS],
  entryComponents: [RaindropComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
