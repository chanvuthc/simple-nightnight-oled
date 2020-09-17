import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [HomePage],
})
export class HomePageModule {}
