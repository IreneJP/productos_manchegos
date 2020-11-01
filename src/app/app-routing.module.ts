import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasketComponent } from './pages/basket/basket.component';
import { CuredComponent } from './pages/cured/cured.component';
import { FooterComponent } from './pages/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { RedComponent } from './pages/red/red.component';
import { RoseComponent } from './pages/rose/rose.component';
import { SemiCuredComponent } from './pages/semi-cured/semi-cured.component';
import { SoftComponent } from './pages/soft/soft.component';
import { WhiteComponent } from './pages/white/white.component';
import { WinesComponent } from './pages/wines/wines.component';
import { CheesesComponent } from './pages/cheeses/cheeses.component';
import { CheeseComponent } from './pages/cheese/cheese.component';


const routes: Routes = [
  {path: 'navbar', component: NavBarComponent},
  {path: 'wines', component: WinesComponent},
  {path: 'redWines', component: RedComponent},
  {path: 'whiteWines', component: WhiteComponent},
  {path: 'roseWines', component: RoseComponent},
  {path: 'cheeses', component:CheesesComponent},
  {path: 'cheese', component:CheeseComponent},
  {path: 'softCheeses', component:SoftComponent},
  {path: 'curedCheeses', component:CuredComponent},
  {path: 'semi-curedCheeses', component:SemiCuredComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'login', component: LoginComponent},
  {path: 'footer', component: FooterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
