import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {  MatButtonModule,
          MatCheckboxModule,
          MatCardModule,
          MatGridListModule
      } from '@angular/material';
// import { ParallaxScrollModule } from 'ng2-parallaxscroll';
import { FlexLayoutModule } from '@angular/flex-layout';

import { WindowRef } from 'helpers/windowRef';

import { AppComponent } from './app.component';
import { RainyDayComponent } from './rainy-day/rainy-day.component';
import { RaindropComponent } from './raindrop/raindrop.component';
import { WindowPaneComponent } from './window-pane/window-pane.component';

import { RainyDayService } from './rainy-day/rainy-day.service';
import { FrontRainDirective } from 'app/directives/front-rain.directive';
import { BackRainDirective } from 'app/directives/back-rain.directive';

import { SkillsPaneComponent } from './skills-pane/skills-pane.component';
import { PolaroidComponent } from './polaroid/polaroid.component';

@NgModule({
  declarations: [
    AppComponent,
    RainyDayComponent,
    RaindropComponent,
    FrontRainDirective,
    BackRainDirective,
    WindowPaneComponent,
    SkillsPaneComponent,
    PolaroidComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    // ParallaxScrollModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule
  ],
  providers: [RainyDayService, WindowRef],
  entryComponents: [RaindropComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
