import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BienvenidoComponent } from './page/bienvenido/bienvenido.component';
import { LoginComponent } from './page/login/login.component';
import { AltaProductoComponent } from './componentes/alta-producto/alta-producto.component';
import { ListadoPaisesComponent } from './componentes/listado-paises/listado-paises.component';
import { ProductoDetalleComponent } from './componentes/producto-detalle/producto-detalle.component';
import { ListadoProductoComponent } from './componentes/listado-producto/listado-producto.component';
import { DetalleProductoComponent } from './componentes/detalle-producto/detalle-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    LoginComponent,
    AltaProductoComponent,
    ListadoPaisesComponent,
    ProductoDetalleComponent,
    ListadoProductoComponent,
    DetalleProductoComponent
  ],
  imports: [  
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
