import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { AlbumComponent } from './album/album.component';
import { ContactComponent } from './contact/contact.component';
import { VideoComponent } from './video/video.component';
import { MapComponent } from './map/map.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';


const routeConfig: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: IndexComponent},
  {path: 'about', component: AboutComponent},
  {path: 'album', component: AlbumComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'video', component: VideoComponent},
  {path: 'product', component: ProductComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    IndexComponent,
    AboutComponent,
    ProductComponent,
    AlbumComponent,
    ContactComponent,
    VideoComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routeConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
