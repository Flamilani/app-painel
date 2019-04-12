import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopoComponent } from './components/topo/topo.component';
import { TentativasComponent } from './components/tentativas/tentativas.component';
import { PainelComponent } from './components/painel/painel.component';
import { ProgressoComponent } from './components/progresso/progresso.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    TentativasComponent,
    PainelComponent,
    ProgressoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
