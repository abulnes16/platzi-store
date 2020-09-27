import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';

@NgModule({
  declarations: [
    // Components
    HeaderComponent,
    FooterComponent,
    // Directives
    HighlightDirective,
    // Pipes
    ExponentialPipe,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HighlightDirective,
    ExponentialPipe,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
