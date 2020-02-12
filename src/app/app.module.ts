import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ModalFormComponent } from "./modal-form/modal-form.component";

@NgModule({
  declarations: [AppComponent, ModalFormComponent],
  imports: [BrowserModule, AppRoutingModule, MDBBootstrapModule.forRoot()],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}