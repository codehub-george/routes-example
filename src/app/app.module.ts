import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SomeComponent } from './some/some.component';
import { ExampleComponent } from './example/example.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SingleComponent } from './single/single.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SomeComponent,
    ExampleComponent,
    NavigationComponent,
    SingleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
