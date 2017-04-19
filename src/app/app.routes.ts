

import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NoteListComponent } from './notelist.component';
import { NewNoteComponent } from './newnote.component';
import { NewCategoryComponent } from './newcategory.component';
import { CategoryListComponent } from './categorylist.component';

export const routes: Routes = [
{ path: '', redirectTo: 'notelist', pathMatch: 'full' },
{ path: 'notelist', component: NoteListComponent },
{ path: 'newnote', component: NewNoteComponent },
{ path: 'newcategory', component: NewCategoryComponent },
{ path: 'categorylist', component: CategoryListComponent },
];
