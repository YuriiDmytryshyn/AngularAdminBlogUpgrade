import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './components/admin/admin.component';
import { BlogComponent } from './components/blog/blog.component';
import { AdminCategoryComponent } from './components/admin/admin-category/admin-category.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { AdminBlogComponent } from './components/admin/admin-blog/admin-blog.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'blog' },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: BlogDetailsComponent },
  {
    path: 'admin', component: AdminComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: 'admin-blog' },
      { path: 'admin-category', component: AdminCategoryComponent },
      { path: 'admin-products', component: AdminProductsComponent },
      { path: 'admin-blog', component: AdminBlogComponent },
    ]
  },
  { path: '**', component: BlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
