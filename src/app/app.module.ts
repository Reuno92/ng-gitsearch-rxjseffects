import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
// NgRx Modules
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {RepositoryModule} from './repository/repository.module';
import {HttpClientModule} from '@angular/common/http';

const NGRX_MODULE = [
  StoreModule.forRoot({}),
  EffectsModule.forRoot([]),
  StoreDevtoolsModule.instrument({
    name: 'GitSearch',
    maxAge: 15
  })
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...NGRX_MODULE,
    RepositoryModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
