import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { RouterModule }   from '@angular/router';


@NgModule({
    declarations: [
        AppComponent,MovieComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: 'movies',
                component: MovieComponent
            }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }


