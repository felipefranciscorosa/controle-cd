import { ThirdComponent } from './third/third.component';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'first', component: FirstComponent },
                        { path: 'second', component: SecondComponent },
                        { path: 'third', component: ThirdComponent },
                        { path: 'third/:cdAlbum', component: ThirdComponent },
                        { path: '', redirectTo: '/first', pathMatch: 'full' },];//set up routes contant

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
