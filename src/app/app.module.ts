import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { OnlyForScreenDirective } from "./shared/directives";
import { ResizeService } from "./shared/services/resize.service";

@NgModule({
  declarations: [AppComponent, OnlyForScreenDirective],
  imports: [BrowserModule],
  providers: [ResizeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
