import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasketComponent } from './pages/basket/basket.component';
import { CheeseComponent } from './pages/cheese/cheese.component';
import { CuredComponent } from './pages/cured/cured.component';
import { FooterComponent } from './pages/footer/footer.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { RedComponent } from './pages/red/red.component';
import { RoseComponent } from './pages/rose/rose.component';
import { SemiCuredComponent } from './pages/semi-cured/semi-cured.component';
import { SoftComponent } from './pages/soft/soft.component';
import { WhiteComponent } from './pages/white/white.component';
import { WineComponent } from './pages/wine/wine.component';


const routes: Routes = [
  {path: 'navbar', component: NavBarComponent},
  {path: 'wines', component: WineComponent},
  {path: 'redWines', component: RedComponent},
  {path: 'whiteWines', component: WhiteComponent},
  {path: 'roseWines', component: RoseComponent},
  {path: 'cheeses', component:CheeseComponent},
  {path: 'cheeses', component:CheeseComponent},
  {path: 'softCheeses', component:SoftComponent},
  {path: 'curedCheeses', component:CuredComponent},
  {path: 'semi-curedCheeses', component:SemiCuredComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'footer', component: FooterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
