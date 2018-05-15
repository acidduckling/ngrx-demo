import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { postReducer } from './reducers/post.reducer';
import { simpleReducer } from './simple.reducer';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ post: postReducer, message: simpleReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
