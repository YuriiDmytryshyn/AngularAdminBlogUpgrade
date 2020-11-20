import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { BlogComponent } from './components/blog/blog.component';
import { AdminCategoryComponent } from './components/admin/admin-category/admin-category.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { AdminBlogComponent } from './components/admin/admin-blog/admin-blog.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';


import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    BlogComponent,
    AdminCategoryComponent,
    AdminProductsComponent,
    AdminBlogComponent,
    BlogDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
