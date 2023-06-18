import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RetrieverPage } from './retriever.page';

import { RetrieverPageRoutingModule } from './retriever-routing.module';
import { SMS } from '@awesome-cordova-plugins/sms/ngx';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RetrieverPageRoutingModule,
  ],
  declarations: [RetrieverPage],
  providers:[SMS]
})
export class RetrieverPageModule {}
