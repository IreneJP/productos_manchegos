//Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Module
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

//Component
import { AppComponent } from './app.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { WinesComponent } from './pages/wines/wines.component';
import { CheesesComponent } from './pages/cheeses/cheeses.component';
import { RedComponent } from './pages/red/red.component';
import { WhiteComponent } from './pages/white/white.component';
import { RoseComponent } from './pages/rose/rose.component';
import { SoftComponent } from './pages/soft/soft.component';
import { CuredComponent } from './pages/cured/cured.component';
import { SemiCuredComponent } from './pages/semi-cured/semi-cured.component';
import { BasketComponent } from './pages/basket/basket.component';
import { LoginComponent } from './pages/login/login.component';
import { CheeseComponent } from './pages/cheese/cheese.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';


//Service
import { TranslateService } from './shared/translate.service';

//Pipe
import { TranslatePipe } from './pipes/translate.pipe';


export function translateFactory(provider:TranslateService){
  return () => provider.getData();
}

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    WinesComponent,
    CheesesComponent,
    TranslatePipe,
    RedComponent,
    WhiteComponent,
    RoseComponent,
    SoftComponent,
    CuredComponent,
    SemiCuredComponent,
    BasketComponent,
    LoginComponent,
    CheeseComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: translateFactory,
      deps: [TranslateService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
