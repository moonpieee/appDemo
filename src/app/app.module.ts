import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputBoxComponent } from './component/input-box/input-box.component';
import { TagListComponent } from './component/tag-list/tag-list.component';

import { NoHtmlTagsDirective } from './shared/directives/no-html-tags.directive';

@NgModule({
  declarations: [
    AppComponent,
    InputBoxComponent,
    TagListComponent,
    NoHtmlTagsDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
