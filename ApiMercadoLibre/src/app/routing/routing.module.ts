import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import  {ShowComponent} from '../components/show/show.component';
import { SearchComponent} from '../components/search/search.component';
import { CoverComponent} from '../components/cover/cover.component';

const routes: Routes = [{ 
  path:'producto/:id',
  component:ShowComponent
},
{
  path:'producto/found/:search',
  component:SearchComponent
},
{
  path:'',
  component:CoverComponent
}


];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
     RouterModule
  ]

})
export class RoutingModule { }
