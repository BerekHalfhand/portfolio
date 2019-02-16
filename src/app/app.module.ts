import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WindowRef } from 'helpers/windowRef';

import { AppComponent } from './app.component';
import { RainyDayComponent } from './rainy-day/rainy-day.component';
import { RaindropComponent } from './raindrop/raindrop.component';
import { RaindropService } from './raindrop/raindrop.service';
import { FrontRainDirective } from './rainy-day/front-rain.directive';
import { BackRainDirective } from './rainy-day/back-rain.directive';

@NgModule({
  declarations: [
    AppComponent,
    RainyDayComponent,
    RaindropComponent,
    FrontRainDirective,
    BackRainDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [RaindropService, WindowRef],
  entryComponents: [RaindropComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
