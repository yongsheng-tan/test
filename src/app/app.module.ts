import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProductFeatureModule } from './product-feature/product-feature.module';
import { DDSAngularModule } from "@dds/angular";

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    // ProductComponent
  ],
  imports: [
    BrowserModule,
    ProductFeatureModule,
    DDSAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
