import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RetrieverPage } from './retriever.page';

const routes: Routes = [
  {
    path: '',
    component: RetrieverPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RetrieverPageRoutingModule {}
