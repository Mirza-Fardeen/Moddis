import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstfloorComponent } from "./firstfloor/firstfloor.component";
import { GroundfloorComponent } from "./groundfloor/groundfloor.component";
import { SecondfloorComponent } from "./secondfloor/secondfloor.component";
const appRoutes: Routes = [
  { path: '', component: GroundfloorComponent },
  { path: 'firstfloor', component: FirstfloorComponent },
  { path: 'secondfloor', component: SecondfloorComponent }

]
@NgModule(
  {
    imports: [

      RouterModule.forRoot(appRoutes)
    ],
    exports: [
      RouterModule
    ]
  }
)
export class AppRoutingModule {

}
