import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadImagensComponent } from './upload-imagens/upload-imagens.component';
import { LivrosComponent } from './livros/livros.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'uploads', component: UploadImagensComponent },
  { path: 'livros', component: LivrosComponent },
  { path: '',   redirectTo: '/uploads', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    LivrosComponent,
    UploadImagensComponent,
    PageNotFoundComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
