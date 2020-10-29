//Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//Module
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

//Component
import { AppComponent } from './app.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { WineComponent } from './pages/wine/wine.component';
import { CheeseComponent } from './pages/cheese/cheese.component';
import { RedComponent } from './pages/red/red.component';
import { WhiteComponent } from './pages/white/white.component';
import { RoseComponent } from './pages/rose/rose.component';
import { SoftComponent } from './pages/soft/soft.component';
import { CuredComponent } from './pages/cured/cured.component';
import { SemiCuredComponent } from './pages/semi-cured/semi-cured.component';


//Service
import { TranslateService } from './shared/translate.service';

//Pipe
import { TranslatePipe } from './pipes/translate.pipe';
import { BasketComponent } from './pages/basket/basket.component';

export function translateFactory(provider:TranslateService){
  return () => provider.getData();
}

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    WineComponent,
    CheeseComponent,
    TranslatePipe,
    RedComponent,
    WhiteComponent,
    RoseComponent,
    SoftComponent,
    CuredComponent,
    SemiCuredComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    CommonModule
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
