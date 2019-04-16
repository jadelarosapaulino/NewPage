import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';

const routes: Routes  = [
    { path: 'buscar', component: SearchComponent },
    { path: 'home', component: HomeComponent },
    //{
    //  path: 'heroes',
    //  component: HomeComponent,
    //  data: { title: 'Heroes List' }
    //},
    { path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
