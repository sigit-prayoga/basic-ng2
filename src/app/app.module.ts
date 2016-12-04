import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProfileModule} from './profile/profile.module';
import { ColoredDirective } from './colored.directive';
import { LoggerService } from './logger.service';

@NgModule({
  declarations: [
    AppComponent,
    ColoredDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ProfileModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
