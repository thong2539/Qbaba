import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewbarberPage } from './newbarber';

@NgModule({
  declarations: [
    NewbarberPage,
  ],
  imports: [
    IonicPageModule.forChild(NewbarberPage),
  ],
})
export class NewbarberPageModule {}
