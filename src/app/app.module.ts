import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { FormsModule } from '@angular/forms';
import { DemoDirectiveDirective } from './demo-directive.directive';
import { PracticeComponent } from './practice/practice.component';
import { ChildComponent } from './child/child.component';
import { TryComponent } from './try/try.component';
import { HttpClientModule} from '@angular/common/http';
import { NameTitlePipe } from './name-title.pipe';
import { GenderTitleModifyPipe } from './gender-title-modify.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    DemoDirectiveDirective,
    PracticeComponent,
    ChildComponent,
    TryComponent,
    NameTitlePipe,
    GenderTitleModifyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
