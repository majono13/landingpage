import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Modulos Angyular
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//NGX BOOTSTRAP
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

//Componentes
import { MenuComponent } from './menu/menu.component';
import { CarouselComponent } from './carousel/carousel.component';
import { InfoComponent } from './info/info.component';
import { ServicesComponentComponent } from './services-component/services-component.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonTopComponent } from './button-top/button-top.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CarouselComponent,
    InfoComponent,
    ServicesComponentComponent,
    RegisterComponent,
    FooterComponent,
    ButtonTopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    AlertModule.forRoot(),
    ProgressbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
