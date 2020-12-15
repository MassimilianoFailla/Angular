import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabellaComponent } from './tabella/tabella.component';
import { SearchPipe } from './pipe/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TabellaComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
