import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { IntrosectionComponent } from './introsection/introsection.component';
import { TranscriptionstepsComponent } from './transcriptionsteps/transcriptionsteps.component';

const routes: Routes = [
  { path: '', component: IntrosectionComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'fileUpload', component: FileuploadComponent },
  { path: 'transcriptionsteps', component: TranscriptionstepsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
