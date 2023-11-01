import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchContentComponent } from './components/search-content/search-content.component';
import { InputFloatingTextModule } from 'src/app/shared/components/input-floating-text/input-floating-text.module';
import { CardsInformationsComponent } from './components/cards-informations/cards-informations.component';


@NgModule({
  declarations: [
    HomePageComponent,
    SearchContentComponent,
    CardsInformationsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    InputFloatingTextModule
  ]
})
export class HomeModule { }
